import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  framework: "@storybook/react-webpack5",
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config!.resolve!.alias = {
      'react-native$': 'react-native-web',
    };
    config!.module!.rules!.push({
      loader: 'babel-loader',
      test: /\.tsx?$/,
      options: {
        presets: ['babel-preset-expo', '@babel/preset-typescript'],
      },
    });
    config!.module!.rules!.push({
      loader: 'babel-loader',
      test: /\.jsx?$/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      },
      include: [
        /node_modules\/.*react-native.*/,
      ],
    });
    return config;
  },
};
export default config;
