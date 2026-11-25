import { Projalf } from "projalf"
import { javascript } from "projen"
const project = new Projalf({
  cdkVersion: "2.189.1",
  devDeps: ["projalf"],
  name: "Rune-server",
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true

  // defaultReleaseBranch: "main",  /* The name of the main release branch. */
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
})
project.synth()
