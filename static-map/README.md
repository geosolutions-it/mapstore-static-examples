# Static map with MapStore

This repository is an example of the map viewer of MapStore used as static client

demo timeline: https://geosolutions-it.github.io/mapstore-static-examples/static-map/dist/index.html#/

demo chart: https://geosolutions-it.github.io/mapstore-static-examples/static-map/dist/index.html?map=observatories-map#/

## Map configurations

The map configurations are stored as static json inside the configs/ folder. This application uses the query parameter `map` that represents the name of the file to load a different configuration from the configs/ directory and by default it loads the `configs/meteorites-map.json` file.

example: https://geosolutions-it.github.io/mapstore-static-examples/static-map/dist/index.html?map=observatories-map#/ loads the `configs/observatories-map.json` file.

New configuration can be loaded also with the [map import](https://mapstore.readthedocs.io/en/latest/user-guide/import/) plugin.

The map configuration options of MapStore are described in the [documentation](https://mapstore.readthedocs.io/en/latest/developer-guide/maps-configuration/) and it is possible to generate a new configuration by changing the map in the viewer and then get the updated map configuration with the [export plugin](https://mapstore.readthedocs.io/en/latest/user-guide/import/#export-and-import-map-context-files). It is still possible to change the map config manually but for complex visualizations that contains multiple layers, widgets and/or timeline it is suggested to rely on the export plugin.

## How to install a custom MapStore (experimental)

### Steps

This section shows how this repository has been setup

- run the creation script 

`npx @mapstore/project`

- the script will prompt some options before to create and these are the value selected for this custom project

```
- Name of project (default mapstore-project): static-map
- Include backend (yes/no default yes): no
- Optional features (printing, ldap):
- Run npm install after creation setup (yes/no default yes): no
```

- change the mapstore dependencies to point to the latest stable branch instead of `master`

```json
"dependencies": {
    "mapstore": "git+https://github.com/geosolutions-it/MapStore2.git#<branch|tag>"
}
```

- add configuration to package.json to target specific folder of this project instead of the default one

```json
"mapstore": {
    "apps": [
        "js/apps"
    ],
    "html": [
        ""
    ],
    "themes": [
        "themes/"
    ]
}
```

- remove all the default apps inside the `js/apps` directory and create a new entry called [static-map.js](js/apps/static-map.js)

- add a new [index.ejs](index.ejs) template where to load the new app entry and theme

- add a [Viewer.jsx](js/pages/Viewer.jsx) page that represent the main plugin container with two different mode base on the device or screen size (viewer and simple-viewer)

- add a [localConfig.json](configs/localConfig.json) where to configure all the plugins inside the viewer or simple-viewer modes

- add the [License](LICENSE.txt) file if missing from the creation script

- ensure to be inside the project folder root and then install all the dependencies with

`npm install`

### Best practices

Here some suggestions on how to improve the setup of a custom project:

- ensure all the configuration path are initialized correctly. An example are the symbols for annotation and their location in the repository.

- add a custom plugins definition and import only the plugins used by the app. This will reduce the size of final js bundle

- use the alias `@mapstore/framework/` to have access to the components inside the folder `MapStore2/web/client/` of MapStore

- use the alias `@js/` to have access to the components inside the js folder of the custom project

- use the options available in the main entries to initialize the state of the app with particular conditions (an example is the security state)
## Development

- `npm install`

- `npm start`

- app runs at http://localhost:8081/

npm install is needed only once at first setup or if the dependencies have been updated. If the installation does not solve correctly the dependencies use `npm install --legacy-peer-deps` (eg latest version of node/npm)

## Build the app

- `./build.sh`

the compiled app will be copied to `dist/` folder

## Tools

- node v14.17.0
- npm 6.14.13
