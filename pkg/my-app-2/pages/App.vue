<template>
  <div id="root"></div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  async mounted() {
    try {
      // Dynamically import the React app exposed by Module Federation
      const remoteApp = await import('longhornUI/App'); // Make sure this path matches the remote expose path

      // Ensure the app is loaded and mount it to the div with id "react-root"
      if (remoteApp && remoteApp.default) {
        const ReactApp = remoteApp.default;
        // Use ReactDOM to render the app to the #react-root div
        ReactApp(document.getElementById('root'));
      } else {
        console.error('Failed to load the React app');
      }
    } catch (error) {
      console.error('Error loading the remote React app:', error);
    }
  },
};
</script>
