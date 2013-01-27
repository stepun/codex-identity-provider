define([
  'backbone.marionette',
  'tpl!./view',
  'css!./view'
],
function(Marionette, tpl) {
  return Marionette.ItemView.extend({
    template: tpl,
    className: 'row',
    ui: {
      tabs: 'ul.nav',
      loginTab: 'ul.nav a[href="#login"]',
      loginPane: '#login',
      registerTab: 'ul.nav a[href="#register"]',
      registerPane: '#register',
      password: 'input[type="password"][name="password"]',
      confirmPassword: 'input[type="password"][name="confirmPassword"]'
    },
    events: {
      'click input[type="password"] + .add-on .icon-eye-open': 'onRevealPasswordClick',
      'click input[type="text"] + .add-on .icon-eye-open': 'onRevealPasswordClick',
      'click ul.nav a': 'onTabClick',
      'click button[data-goto]': 'onGoto',
      'click a[data-goto]': 'onGoto',
      'blur input[type="password"][name="password"]': 'checkPasswordConfirm',
      'keyup input[type="password"][name="password"]': 'checkPasswordConfirm',
      'keyup input[type="text"][name="password"]': 'innocencelost',
      'keyup input[type="password"][name="confirmPassword"]': 'checkPasswordConfirm',
      'change input[type="password"][name="confirmPassword"]': 'checkPasswordConfirm'
    },
    innocencelost: function(evt) {
      // I clearly have no idea what to call this function
      // @todo remove event listener
      $(evt.target).data('has-blurred', true);
    },
    checkPasswordConfirm: function(evt) {
      var
        form = $(evt.target).closest('form'),
        input = form.find(this.ui.password),
        confirm = form.find(this.ui.confirmPassword);

      // Only test against password if the user has had a change
      // to enter a password in. Once input[name="password"] blurs
      // it will update the confirm warning on key presses
      if ($(evt.target).is(input)) {
        if ('focusout' !== evt.type && !input.data('has-blurred')) {
          return;
        }
        input.data('has-blurred', true);
      }

      if (input.length && confirm.length) {
        confirm.closest('.control-group').toggleClass(
          'warning',
          confirm.val() !== input.val()
        );
      }

      return;
    },
    onTabClick: function(evt) {
      var el = $(evt.target);
      evt.preventDefault();
      this.showTab(el);
    },
    showTab: function(element) {
      var el = $(element);
      el.tab('show');
      if (el.is(this.ui.loginTab)) {
        this.showLoginSubform('login-credentials');
      }
      else if (el.is(this.ui.registerTab)) {
        var form = $(this.ui.registerPane).find('form');
        form[0].reset();
        form.find('[name]:not([disabled]):first').focus().select();
      }
    },
    onGoto: function(evt) {
      evt.preventDefault();
      var
        button = $(evt.target),
        action = button.data('goto');

      switch (action) {
        case 'register':
          this.showTab(this.$el.find(this.ui.registerTab));
        break;
        case 'process-register':
          var
            form = button.closest('form'),
            input = form.find(this.ui.password),
            confirm = form.find(this.ui.confirmPassword);

          if (input.length && !confirm.is(':visible')) {
            input.attr('type', 'password');
            confirm.val(input.val()).change();
            confirm.closest('.control-group').show();
          }
        break;
        default:
          this.showLoginSubform(action);
        break;
      }
    },
    onRevealPasswordClick: function(evt) {
      var
        container = $(evt.target).closest('.input-append'),
        input = container.find('input'),
        confirm = container.closest('form').find(this.ui.confirmPassword);

      if (input.is('[type="password"]')) {
        input.attr('type', 'text');
        input.addClass('password-revealed');
        confirm.closest('.control-group').hide();
        input.focus();
      }
      else if (input.is('[type="text"]')) {
        input.attr('type', 'password');
        input.removeClass('password-revealed');
        confirm.val(input.val()).change();
        confirm.closest('.control-group').show();
        input.focus();
      }
    },
    showLoginSubform: function(id) {
      var
        loginPane = this.$el.find(this.ui.loginPane),
        previousForm = loginPane.find('form.active'),
        previousData = previousForm.serializeArray(),
        selectedForm = loginPane.find('form#' + id);

      if (!selectedForm.length) {
        return;
      }

      if (previousForm.length) {
        _.invoke(previousForm, previousForm[0].reset);
      }

      var mergePreviousData = function() {
        _.each(previousData, function(input) {
          var matchInput = selectedForm.find('[name="' + input.name + '"]');
          if (matchInput.length) {
            matchInput.val(input.value);
          }
        });
      };

      previousForm.removeClass('active');
      selectedForm.addClass('active');

      this.$el.find(this.ui.loginTab).closest('li').toggleClass(
        'active',
        'login-credentials' === id
      );

      var firstField = loginPane.find('form#'+id+' [name]:not([disabled]):first');

      switch (id) {
        case 'recover-password':
        case 'recover-username':
        case 'recover-lookup-by-username':
        case 'recover-lookup-by-email':
          mergePreviousData();
        case 'login-credentials':
          firstField.focus().select();
        break;
        case 'recover-lookup':
          var el = selectedForm.find('input[name="identity"]');
          _.each(previousData, function(input) {
            if ('email' === input.name || 'username' === input.name) {
              el.val(input.value);
              return false;
            }
          });
          firstField.focus().select();
        break;
      }
    },
    onDomRefresh: function(evt) {
      var
        tabs = this.$el.find(this.ui.tabs),
        loginPane = this.$el.find(this.ui.loginPane);

      if (!tabs.find('li.active').length) {
        tabs.find('li:first a').tab('show');
      }

      if (!loginPane.find('form.active').length) {
        loginPane.find('form:first').addClass('active');
      }
    }
  });
});