import { Routes, RouterModule } from "@angular/router";

import { TermsGuard } from "./guards/terms.guard";
import { UnsavedGuard } from "./guards/unsaved.guard";
import { LoadGuard } from "./guards/load.guard";

const routes: Routes = [

]

export const routing = RouterModule.forRoot(routes);
