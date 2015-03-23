// Generated by CoffeeScript 1.7.1
module.exports = {
  minimum: function(value, context) {
    var exclusiveMinimum;
    exclusiveMinimum = context.modifiers.exclusiveMinimum;
    if (exclusiveMinimum) {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data > value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data >= value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    }
  },
  maximum: function(value, context) {
    var exclusiveMaximum;
    exclusiveMaximum = context.modifiers.exclusiveMaximum;
    if (exclusiveMaximum) {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data < value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data <= value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    }
  }
};