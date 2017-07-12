import axios from 'axios';
import yaml from 'js-yaml';

export default {
  mounted() {
    axios('/components.yaml')
      .then(response => yaml.safeLoad(response.data))
      .then(data => this.components = data.components);
  },
  data() {
    return {
      components: {},
    };
  }
}
