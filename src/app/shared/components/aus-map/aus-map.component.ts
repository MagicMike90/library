import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as topojson from 'topojson';

@Component({
  selector: 'app-aus-map',
  templateUrl: './aus-map.component.html',
  styleUrls: ['./aus-map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AusMapComponent implements OnInit {
  @ViewChild('ausmap') private chartContainer: ElementRef;

  @Input() private geojson: GeoJSON.FeatureCollection<any>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.caluclateDimension();

    // update projection
    this.projection = d3.geoMercator()
      .fitSize([this.width, this.height], this.geojson);

    //update path
    this.path = d3.geoPath().projection(this.projection);

    d3.selectAll("path").attr('d', this.path);
  }

  private htmlElement: HTMLElement;
  private width: number;
  private height: number;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private mapRatio: number = .7;
  private svg: any;
  private backgrond: any;
  private g: any;
  private activeBlock: any = d3.select(null);

  private projection: any;
  private path: any;


  constructor() { }

  ngOnInit() {
    this.initMap();
    this.drawMap();
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }


  private initMap(): void {
    // create svg
    this.svg = d3.select(this.chartContainer.nativeElement).append('svg');

    // create svg background
    this.backgrond = this.svg.append("rect")
      .attr("class", "background")
      .on("click", this.resetView.bind(this));

    // setup path group
    this.g = this.svg.append("g").style("stroke-width", "1.5px");

    // calculate svg dimension to fix to container
    this.caluclateDimension();
  }
  private caluclateDimension(): void {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetWidth * this.mapRatio - this.margin.top - this.margin.bottom;

    this.svg.attr('width', this.width)
      .attr('height', this.height);

    // setup svg background, when click outside the map, resetView the map
    this.backgrond
      .attr('width', this.width)
      .attr('height', this.height)
  }
  private drawMap(): void {
    this.projection = d3.geoMercator()
      .fitSize([this.width, this.height], this.geojson)
      .precision(0.1);

    this.path = d3.geoPath().projection(this.projection);

    this.g.attr("class", "states")
      .selectAll("path")
      .data(this.geojson.features)
      .enter().append("path")
      .attr("d", this.path)
      .attr("class", "state")
      .on("mouseover", d => this.hightLight(d))
      .on("mouseout", function (d) {
        d3.select("h2").text("");
      })
      .on("click", this.clickeState.bind(this));;

    this.g.append("path")
      .datum(this.geojson.features)
      .attr("class", "mesh")
      .attr("d", this.path);
  }
  private hightLight(d): void {
    console.log(d);
    d3.select("h2").text(d.properties.brk_name);
    console.log(d.properties.brk_name);
  }
  private clickeState(d, i, nodes): void {

    if (this.activeBlock.node() === nodes[i]) return this.resetView();
    this.activeBlock.classed("active", false);
    this.activeBlock = d3.select(nodes[i]).classed("active", true);

    const bounds = this.path.bounds(d);
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = .9 / Math.max(dx / this.width, dy / this.height);
    const translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];

    this.g.transition()
      .duration(750)
      .style("stroke-width", 1.5 / scale + "px")
      .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
  }
  resetView(): void {
    this.activeBlock.classed("active", false);
    this.activeBlock = d3.select(null);

    this.g.transition()
      .duration(750)
      .style("stroke-width", "1.5px")
      .attr("transform", "");
  }
}
