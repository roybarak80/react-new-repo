
import IntlTelInput from 'react-intl-tel-input'; // eslint-disable-line import/no-extraneous-dependencies

// import 'file-loader?name=libphonenumber.js!./libphonenumber.js';
// import './main.css';

const loadJSONP = (url, callback) => {
  const ref = window.document.getElementsByTagName('script')[0];
  const script = window.document.createElement('script');

  script.src = `${url + (url.indexOf('?') + 1 ? '&' : '?')}callback=${callback}`;
  ref.parentNode.insertBefore(script, ref);
  script.onload = () => {
    script.remove();
  };
};

const lookup = (callback) => {
  loadJSONP('http://ipinfo.io', 'sendBack');
  window.sendBack = (resp) => {
    const countryCode = (resp && resp.country) ? resp.country : '';

    callback(countryCode);
  };
};

function log(...args) {
  console.log(args);
}
import React, {Component} from 'react';
class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone1: '',
      phone2: '',
    };
  }


  render() {
    return (
      <div>
        <IntlTelInput
          onPhoneNumberChange={ this.changePhone1 }
          onPhoneNumberBlur={ this.blurHandler1 }
          onSelectFlag={ this.selectFlagHandler1 }
          defaultCountry={ 'auto' }
          value={ this.state.phone1 }
          geoIpLookup={ lookup }
          css={ ['intl-tel-input', 'form-control'] }
          utilsScript="libphonenumber.js"
          format
        />
        <div>Phone Number: {this.state.phone1 }</div>



      </div>
    );
  }
}

export default DemoComponent;