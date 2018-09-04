module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": [
          ">0.25%",
          "not ie 11",
          "not op_mini all"
        ],
        "node": "6.10"
      }
    }],
    "@babel/preset-react",
    "@babel/preset-flow"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }]
  ]
}
