import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";
import { MenuItem, Select } from "@material-ui/core";
import { Typography } from '@mui/material';
import './Supporters.css'
import FormHelperText from "@mui/material/FormHelperText";
// import zxcvbn from "zxcvbn"; // Import the password strength checker library



export default function OtherPersonSignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);

  const handleValidation = (newValue) => {
    if (newValue && newValue.label === "Pakistan") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const countries = [
    { label: "Andorra" },
    { label: "United Arab Emirates" },
    { label: "Afghanistan" },
    { label: "Antigua and Barbuda" },
    { label: "Anguilla" },
    { label: "Albania" },
    { label: "Armenia" },
    { label: "Angola" },
    { label: "Antarctica" },
    { label: "Argentina" },
    { label: "American Samoa" },
    { label: "Austria" },
    { label: "Australia", suggested: true },
    { label: "Aruba" },
    { label: "Alland Islands" },
    { label: "Azerbaijan" },
    { label: "Bosnia and Herzegovina" },
    { label: "Barbados" },
    { label: "Bangladesh" },
    { label: "Belgium" },
    { label: "Burkina Faso" },
    { label: "Bulgaria" },
    { label: "Bahrain" },
    { label: "Burundi" },
    { label: "Benin" },
    { label: "Saint Barthelemy" },
    { label: "Bermuda" },
    { label: "Brunei Darussalam" },
    { label: "Bolivia" },
    { label: "Brazil" },
    { label: "Bahamas" },
    { label: "Bhutan" },
    { label: "Bouvet Island" },
    { label: "Botswana" },
    { label: "Belarus" },
    { label: "Belize" },
    { label: "Canada", suggested: true },
    { label: "Cocos (Keeling) Islands" },
    { label: "Congo, Democratic Republic of the" },
    { label: "Central African Republic" },
    { label: "Congo, Republic of the" },
    { label: "Switzerland" },
    { label: "Cote d'Ivoire" },
    { label: "Cook Islands" },
    { label: "Chile" },
    { label: "Cameroon" },
    { label: "China" },
    { label: "Colombia" },
    { label: "Costa Rica" },
    { label: "Cuba" },
    { label: "Cape Verde" },
    { label: "Curacao" },
    { label: "Christmas Island" },
    { label: "Cyprus" },
    { label: "Czech Republic" },
    { label: "Germany", suggested: true },
    { label: "Djibouti" },
    { label: "Denmark" },
    { label: "Dominica" },
    { label: "Dominican Republic" },
    { label: "Algeria" },
    { label: "Ecuador" },
    { label: "Estonia" },
    { label: "Egypt" },
    { label: "Western Sahara" },
    { label: "Eritrea" },
    { label: "Spain" },
    { label: "Ethiopia" },
    { label: "Finland" },
    { label: "Fiji" },
    { label: "Falkland Islands (Malvinas)" },
    { label: "Micronesia, Federated States of" },
    { label: "Faroe Islands" },
    { label: "France" },
    { label: "Gabon" },
    { label: "United Kingdom" },
    { label: "Grenada" },
    { label: "Georgia" },
    { label: "French Guiana" },
    { label: "Guernsey" },
    { label: "Ghana" },
    { label: "Gibraltar" },
    { label: "Greenland" },
    { label: "Gambia" },
    { label: "Guinea" },
    { label: "Guadeloupe" },
    { label: "Equatorial Guinea" },
    { label: "Greece" },
    { label: "South Georgia and the South Sandwich Islands" },
    { label: "Guatemala" },
    { label: "Guam" },
    { label: "Guinea-Bissau" },
    { label: "Guyana" },
    { label: "Hong Kong" },
    { label: "Heard Island and McDonald Islands" },
    { label: "Honduras" },
    { label: "Croatia" },
    { label: "Haiti" },
    { label: "Hungary" },
    { label: "Indonesia" },
    { label: "Ireland" },
    { label: "Israel" },
    { label: "Isle of Man" },
    { label: "India" },
    { label: "British Indian Ocean Territory" },
    { label: "Iraq" },
    { label: "Iran, Islamic Republic of" },
    { label: "Iceland" },
    { label: "Italy" },
    { label: "Jersey" },
    { label: "Jamaica" },
    { label: "Jordan" },
    { label: "Japan", suggested: true },
    { label: "Kenya" },
    { label: "Kyrgyzstan" },
    { label: "Cambodia" },
    { label: "Kiribati" },
    { label: "Comoros" },
    { label: "Saint Kitts and Nevis" },
    { label: "Korea, Democratic People's Republic of" },
    { label: "Korea, Republic of" },
    { label: "Kuwait" },
    { label: "Cayman Islands" },
    { label: "Kazakhstan" },
    { label: "Lao People's Democratic Republic" },
    { label: "Lebanon" },
    { label: "Saint Lucia" },
    { label: "Liechtenstein" },
    { label: "Sri Lanka" },
    { label: "Liberia" },
    { label: "Lesotho" },
    { label: "Lithuania" },
    { label: "Luxembourg" },
    { label: "Latvia" },
    { label: "Libya" },
    { label: "Morocco" },
    { label: "Monaco" },
    { label: "Moldova, Republic of" },
    { label: "Montenegro" },
    { label: "Saint Martin (French part)" },
    { label: "Madagascar" },
    { label: "Marshall Islands" },
    { label: "Macedonia, the Former Yugoslav Republic of" },
    { label: "Mali" },
    { label: "Myanmar" },
    { label: "Mongolia" },
    { label: "Macao" },
    { label: "Northern Mariana Islands" },
    { label: "Martinique" },
    { label: "Mauritania" },
    { label: "Montserrat" },
    { label: "Malta" },
    { label: "Mauritius" },
    { label: "Maldives" },
    { label: "Malawi" },
    { label: "Mexico" },
    { label: "Malaysia" },
    { label: "Mozambique" },
    { label: "Namibia" },
    { label: "New Caledonia" },
    { label: "Niger" },
    { label: "Norfolk Island" },
    { label: "Nigeria" },
    { label: "Nicaragua" },
    { label: "Netherlands" },
    { label: "Norway" },
    { label: "Nepal" },
    { label: "Nauru" },
    { label: "Niue" },
    { label: "New Zealand" },
    { label: "Oman" },
    { label: "Panama" },
    { label: "Peru" },
    { label: "French Polynesia" },
    { label: "Papua New Guinea" },
    { label: "Philippines" },
    { label: "Pakistan" },
    { label: "Poland" },
    { label: "Saint Pierre and Miquelon" },
    { label: "Pitcairn" },
    { label: "Puerto Rico" },
    { label: "Palestine, State of" },
    { label: "Portugal" },
    { label: "Palau" },
    { label: "Paraguay" },
    { label: "Qatar" },
    { label: "Reunion" },
    { label: "Romanian" },
    { label: "Serbia" },
    { label: "Russian Federation" },
    { label: "Rwanda" },
    { label: "Saudi Arabia" },
    { label: "Solomon Islands" },
    { label: "Seychelles" },
    { label: "Sudan" },
    { label: "Sweden" },
    { label: "Singapore" },
    { label: "Saint Helena" },
    { label: "Slovenia" },
    { label: "Svalbard and Jan Mayen" },
    { label: "Slovakia" },
    { label: "Sierra Leone" },
    { label: "San Marino" },
    { label: "Senegal" },
    { label: "Somalia" },
    { label: "Suriname" },
    { label: "South Sudan" },
    { label: "Sao Tome and Principe" },
    { label: "El Salvador" },
    { label: "Sint Maarten (Dutch part)" },
    { label: "Syrian Arab Republic" },
    { label: "Swaziland" },
    { label: "Turks and Caicos Islands" },
    { label: "Chad" },
    { label: "French Southern Territories" },
    { label: "Togo" },
    { label: "Thailand", phone: "66" },
    { label: "Tajikistan", phone: "992" },
    { label: "Tokelau", phone: "690" },
    { label: "Timor-Leste", phone: "670" },
    { label: "Turkmenistan", phone: "993" },
    { label: "Tunisia", phone: "216" },
    { label: "Tonga", phone: "676" },
    { label: "Turkey", phone: "90" },
    { label: "Trinidad and Tobago" },
    { label: "Tuvalu" },
    { label: "Taiwan, Republic of China" },
    { label: "United Republic of Tanzania" },
    { label: "Ukraine" },
    { label: "Uganda" },
    { label: "United States" },
    { label: "Uruguay" },
    { label: "Uzbekistan" },
    { label: "Holy See (Vatican City State)" },
    { label: "Saint Vincent and the Grenadines" },
    { label: "Venezuela" },
    { label: "British Virgin Islands" },
    { label: "US Virgin Islands" },
    { label: "Vietnam" },
    { label: "Vanuat" },
    { label: "Wallis and Futuna" },
    { label: "Samoa" },
    { label: "Kosovo" },
    { label: "Yemen" },
    { label: "Mayotte" },
    { label: "South Afric" },
    { label: "Zambia" },
    { label: "Zimbabwe" },
  ];

  const [option, setOption] = useState("cnic");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const [income, setIncome] = useState('');
  const [isIncomeValid, setIsIncomeValid] = useState(false);

  const handleIncomeChange = (event) => {
    const income = event.target.value;
    const isValid = income >= 45000;
    setIsIncomeValid(isValid);
    setIncome(income);
  };

  const [isHovering, setIsHovering] = useState(false);

  
const countryCodes = [
  { value: '+1', label: '+1 (USA)' },
  { value: '+44', label: '+44 (UK)' },
  { value: '+61', label: '+61 (Australia)' },
  { value: '+33', label: '+33 (France)' },
  { value: '+81', label: '+81 (Japan)' },
  { value: '+86', label: '+86 (China)' },
{ value: '+49', label: '+49 (Germany)' },
{ value: '+39', label: '+39 (Italy)' },
{ value: '+52', label: '+52 (Mexico)' },
{ value: '+31', label: '+31 (Netherlands)' },
{ value: '+7', label: '+7 (Russia)' },
{ value: '+65', label: '+65 (Singapore)' },
{ value: '+27', label: '+27 (South Africa)' },
{ value: '+34', label: '+34 (Spain)' },
{ value: '+46', label: '+46 (Sweden)' },
{ value: '+41', label: '+41 (Switzerland)' },
{ value: '+90', label: '+90 (Turkey)' },
{ value: '+971', label: '+971 (United Arab Emirates)' },
{ value: '+598', label: '+598 (Uruguay)' },
{ value: '+58', label: '+58 (Venezuela)' },
{ value: '+84', label: '+84 (Vietnam)' },
{ value: '+967', label: '+967 (Yemen)' },
{ value: '+260', label: '+260 (Zambia)' },
{ value: '+263', label: '+263 (Zimbabwe)' },
{ value: '+92', label: '+92 (Pakistan)' },
{ value: '+971', label: '+971 (UAE)' },
{ value: '+44', label: '+44 (England)' },
{ value: '+91', label: '+91 (India)' },
{ value: '+880', label: '+880 (Bangladesh)' },
{ value: '+94', label: '+94 (Sri Lanka)' },
  // Add more country codes as needed
];

const [countryCode, setCountryCode] = useState('+92');
const [phoneNumber, setPhoneNumber] = useState('');

const handleCountryCodeChange = (event) => {
  setCountryCode(event.target.value);
};

const handlePhoneNumberChange = (event) => {
  const value = event.target.value;
  setPhoneNumber(value);
  if (value.startsWith('1')) {
    setCountryCode('+1');
  } else if (value.startsWith('44')) {
    setCountryCode('+44');
  } else if (value.startsWith('91')) {
    setCountryCode('+91');
  } else if (value.startsWith('880')) {
    setCountryCode('+880');
  } else if (value.startsWith('94')) {
    setCountryCode('+94');
  } else if (value.startsWith('971')) {
    setCountryCode('+971');
  } else if (value.startsWith('03')) {
    setCountryCode('+92');
  } else if (value.startsWith('92')) {
    setCountryCode('+92');
  } // add more country codes as needed
};

/////////////////////Password Checker ////////////////


// dalnaaa haii abhi




  return (
    <div style={{ height: "290px", overflowY: "scroll", textAlign: "center" }}>
      <form><Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
        <h6 className='support3'>*OTHER-PERSON SIGNUP FORM*</h6> 
          <h6 class="please">Please SignUp to Continue</h6>
          
          <div style={{ display: "flex" }}>
            <TextField
              required
              id="filled-basic"
              label="First Name"
              sx={{ m: 1, flex: 1, right: "-100px" }}
              variant="filled"
              size="small"
            />
            <TextField
              required
              label="Last Name"
              id="filled-basic"
              sx={{ m: 1, flex: 1, right: "-100px" }}
              variant="filled"
              size="small"
            />
          </div>

          <div style={{}}>
            <FormControl
              sx={{ m: 1, width: "96%", right: "-100px" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password" required>
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                sx={{ m: 0, fontSize: "12px" }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <FormControl
              sx={{ m: 1, width: "96%", right: "-100px" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password" required>
                Confirm Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                sx={{ m: 0, fontSize: "12px" }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <TextField
    required
    label="Email ID"
    id="filled-basic"
    sx={{ m: 1, width: "96%", marginRight: '-190px' }}
    variant="filled"
    size="small"
    type="email"
  />
   
          <div style={{ display: "flex" }}>
            <TextField
              id="filled-basic"
              label="Occupation (If any)"
              sx={{ m: 1, flex: 1, right: "-100px" }}
              variant="filled"
              size="small"
            />
            <TextField
              required
              label="Source of Income"
              id="filled-basic"
              sx={{ m: 1, flex: 1, right: "-100px" }}
              variant="filled"
              size="small"
            />
          </div>
          <div style={{ display: "flex" }}>
          <div className="textfield-container" style={{ display: 'flex', flexDirection: 'column' }}>
  <TextField
    required
    id="filled-basic"
    label="Monthly Income in Rs."
    sx={{ m: 1, flex: 1, right: "-100px", width: '94%' ,marginTop:'20px'}}
    variant="filled"
    size="small"
    inputProps={{ min: 45000, step: 1 }}
    error={!isIncomeValid}
    onChange={handleIncomeChange}
    InputLabelProps={{
    }}
    InputProps={{
      classes: {
        root: 'textfield-root',
        focused: 'textfield-focused',
      },
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false),
    }}
  />
  {isHovering && !isIncomeValid && (
    <FormHelperText
      error
      sx={{ m: 1, width: '100%', marginTop: '-20px', marginRight: '-120px',marginLeft:'115px' }}
    >
      Monthly income must be at least Rs. 45,000
    </FormHelperText>
  )}
</div>
<p className="mag"><br /><b>Note: <br /><br /> * Write your <br /> Monthly Income <br />in rupees & Upload <br />your Income payslip *</b></p>
          </div>
          <div class="hex">
  <label for="myFile" class="button"></label>
  <input type="file" id="myFile" name="filename" class="upload" />
</div>
          <div
            style={{
              display: "flex"
            }}
          >
            <Autocomplete
              id="country-select-demo"
              sx={{ m: 1, width: "50%" }}
              size="small"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              onChange={(event, newValue) => {
                setValue(newValue);
                handleValidation(newValue);
              }}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  sx={{ right: "-100px" }}
                  required
                  {...params}
                  variant="filled"
                  label="Nationality"
                  error={value && value.label !== "Pakistan"}
                  helperText={
                    value && value.label !== "Pakistan"
                      ? (
                        <Typography
                          sx={{
                            "@media (max-width: 300px)": { // adjust style for screen width less than or equal to 600px
                              fontSize: "12px", 
                            },
                          }}
                          variant="caption"
                          color="error"
                        >
                          Warning: Overseas and dual national Pakistanis must select 'Pakistan' as their Country of Nationality
                        </Typography>
                      )
                      : null
                  }                  
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControl
                sx={{ minWidth: 80, marginRight: 0.5, right: "-100px" }}
              >
                <Select
                  labelId="option-label"
                  id="option"
                  value={option}
                  onChange={handleOptionChange}
                  sx={{ fontSize: 14 }}
                >
                  <MenuItem value="cnic">CNIC</MenuItem>
                  <MenuItem value="pos">POS</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label={
                  option === "cnic" ? "eg: 4XXXX-XXXXXXX-X" : "e.g: ANXS51330"
                }
                sx={{ m: 0, right: "-100px", width:'64%' }}
                variant="filled"
                size="small"
                required
              />
            </Box>
          </div>
        </div>
        <div style={{ display: "flex" }}>
            <TextField
              required
              id="filled-basic"
              label="Residential Address"
              sx={{ m: 1, flex: 1, right: "-100px" }}
              variant="filled"
              size="small"
            />
            <TextField
              required
              label="Postal Code"
              id="filled-basic"
              sx={{ m: 1, flex: 1, right: "-100px", width:'100%' }}
              variant="filled"
              size="small"
              inputMode="numeric"
            />
          </div>
<Autocomplete
  id="country-code-select"
  options={countryCodes}
  getOptionLabel={(option) => option.label}
  value={countryCodes.find((option) => option.value === countryCode)}
  onChange={(event, newValue) => {
    if (newValue) {
      setCountryCode(newValue.value);
    }
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Country Code"
      sx={{ m: 1, width: '85%', marginLeft:'109px' }}
      variant="filled"
      size="small"
    />
  )}
/>
<TextField
  label="Contact Number"
  sx={{ m: 1, width: '38%', marginLeft: '77px',  }}
  variant="filled"
  size="small"
  required
  inputMode="numeric"
  pattern="^[0-9]{10}$"
  value={phoneNumber}
  onChange={handlePhoneNumberChange}
/>
<br/> <br/>
<div>
    <button className="subway3" type="submit">Submit</button>
<p className="already please">
          Already have an account ? <a href="">Sign In</a>
        </p>
</div>
       
      </Box></form>
    </div>
  );
}
