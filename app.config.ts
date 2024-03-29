import { ExpoConfig, ConfigContext } from "@expo/config"

require("ts-node/register")

module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? []

  return {
    ...config,
    owner: "tahazalzali", 
    slug: "SiiRA",
    plugins: [
      ...existingPlugins,
      require("./plugins/withSplashScreen").withSplashScreen,
    ],
  }
}
