exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /detector|date-diff/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }