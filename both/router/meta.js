if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'Morning 5 projects',
        suffix: 'Morning projects'
      }
  });
}
