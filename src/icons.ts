import { LabIcon } from '@jupyterlab/ui-components';
import nebariLogo from '../style/icons/nebari-logo.svg';
import deployApp from '../style/icons/deploy-app.svg';

export const nebariIcon = new LabIcon({
  name: 'nebari:logo',
  svgstr: nebariLogo
});

export const deployAppIcon = new LabIcon({
  name: 'jhub-apps:deploy-app',
  svgstr: deployApp
});
