import { Form } from "mobx-react-form";
import validatorjs from "validatorjs";

export default class CouponForm extends Form {
  /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
  plugins() {
    return { dvr: validatorjs };
  }

  options() {
    return {
      validateOnChange: true,
      validateOnInit: false
    };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */

  setup() {
    return {
      fields: [
        {
          name: "cars",
          label: "Select Car",
          placeholder: "Select Car",
          rules: "required",
          value: []
        }
      ]
    };
  }
}
