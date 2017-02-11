import { analytics } from 'meteor/okgrow:analytics';

FlowRouter.route('/call-direct', {
    action: function(params, queryParams) {
      analytics.track('How about this event', {
        category: 'Will it work?',
        label: 'or not'
      });
      console.log('Test direct call');
    }
});

FlowRouter.route('/call-in-timeout', {
    action: function(params, queryParams) {
      setTimeout(function() {
        analytics.track('How about this event', {
          category: 'Will it work?',
          label: 'or not'
        });
      }, 0);
      console.log('Test call in timeout');
    }
});
