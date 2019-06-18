import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { location: 'national', designations: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.search = false;
    }

    handleChange(event) {

        if (event.target.type == "checkbox") {
            if (event.target.checked && this.state.designations.includes(event.target.value) == false) {
                this.state.designations.push(event.target.value)
            }

            if (event.target.checked == false && this.state.designations.includes(event.target.value) == true) {
                this.state.designations.splice(this.state.designations.findIndex((x) => { return event.target.value == x }), 1);
            }
        }
        else {
            this.state.location = event.target.value;
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            search: true
        });
    }




    render() {
        if (this.state.search) {
            return <Redirect
                to={{
                    pathname: "/search",
                    state: { location: this.state.location, designations: this.state.designations }
                }}
            />

        }
        else {
            return (
                <Container>
                    
                    <Grid container justify="center" spacing={3}  alignItems="center">
                        {/* <Grid item xs={12} > */}
                                <Select
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="national">National
            </MenuItem>
                                <MenuItem value="AL">Alabama
                        </MenuItem>
                                <MenuItem value="AK">Alaska
                        </MenuItem>
                                <MenuItem value="AZ">Arizona
                        </MenuItem>
                                <MenuItem value="AR">Arkansas
                        </MenuItem>
                                <MenuItem value="CA">California
                        </MenuItem>

                                <MenuItem value="CO">Colorado
                        </MenuItem>
                                <MenuItem value="CT">Connecticut
                        </MenuItem>
                                <MenuItem value="DE">Delaware
                        </MenuItem>
                                <MenuItem value="DC">District of Columbia
            </MenuItem>
                                <MenuItem value="FL">Florida
                        </MenuItem>
                                <MenuItem value="GA">Georgia
                        </MenuItem>

                                <MenuItem value="HI">Hawaii
                        </MenuItem>
                                <MenuItem value="ID">Idaho
                        </MenuItem>
                                <MenuItem value="IL">Illinois
                        </MenuItem>
                                <MenuItem value="IN">Indiana
                        </MenuItem>
                                <MenuItem value="IA">Iowa
                        </MenuItem>

                                <MenuItem value="KS">Kansas
                        </MenuItem>
                                <MenuItem value="KY">Kentucky
                        </MenuItem>
                                <MenuItem value="LA">Louisiana
                        </MenuItem>
                                <MenuItem value="ME">Maine
                        </MenuItem>
                                <MenuItem value="MD">Maryland
                        </MenuItem>

                                <MenuItem value="MA">Massachusetts
                        </MenuItem>
                                <MenuItem value="MI">Michigan
                        </MenuItem>
                                <MenuItem value="MN">Minnesota
                        </MenuItem>
                                <MenuItem value="MS">Mississippi
                        </MenuItem>
                                <MenuItem value="MO">Missouri
                        </MenuItem>

                                <MenuItem value="MT">Montana
                        </MenuItem>
                                <MenuItem value="NE">Nebraska
                        </MenuItem>
                                <MenuItem value="NV">Nevada
                        </MenuItem>
                                <MenuItem value="NH">New Hampshire
                        </MenuItem>
                                <MenuItem value="NJ">New Jersey
                        </MenuItem>

                                <MenuItem value="NM">New Mexico
                        </MenuItem>
                                <MenuItem value="NY">New York
                        </MenuItem>
                                <MenuItem value="NC">North Carolina
                        </MenuItem>
                                <MenuItem value="ND">North Dakota
                        </MenuItem>
                                <MenuItem value="OH">Ohio
                        </MenuItem>

                                <MenuItem value="OK">Oklahoma
                        </MenuItem>
                                <MenuItem value="OR">Oregon
                        </MenuItem>
                                <MenuItem value="PA">Pennsylvania
                        </MenuItem>
                                <MenuItem value="RI">Rhode Island
                        </MenuItem>
                                <MenuItem value="SC">South Carolina
                        </MenuItem>

                                <MenuItem value="SD">South Dakota
                        </MenuItem>
                                <MenuItem value="TN">Tennessee
                        </MenuItem>
                                <MenuItem value="TX">Texas
                        </MenuItem>
                                <MenuItem value="UT">Utah
                        </MenuItem>
                                <MenuItem value="VT">Vermont
                        </MenuItem>

                                <MenuItem value="VA">Virginia
                        </MenuItem>
                                <MenuItem value="WA">Washington
                        </MenuItem>
                                <MenuItem value="WV">West Virginia
                        </MenuItem>
                                <MenuItem value="WI">Wisconsin
                        </MenuItem>
                                <MenuItem value="WY">Wyoming
                        </MenuItem>

                            </Select>


                            <Button variant="contained" color="primary" type="submit">
                                Primary
                                    </Button>

                        {/* </Grid> */}
                        {/* <Grid item xs={6} justify="center">
                            <FormGroup>
                                {['National Park', 'National Monument', 'National Preserve', 'National Historic Site',
                                    'National Historic Park', 'National Memorial', 'National Battlefield'].map(name => (
                                        <FormControlLabel
                                            control={<Checkbox
                                                type="checkbox"
                                                onChange={this.handleChange}
                                                value={name}
                                            />} label={`${name}`}
                                        />

                                    ))}
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                {['National Cemetary', 'National Recreation Area',
                                    'National Seashore', 'National Lakeshore', 'National River', 'National Parkway', 'National Trail'].map(name => (

                                        <FormControlLabel
                                            control={<Checkbox
                                                type="checkbox"
                                                onChange={this.handleChange}
                                                value={name}
                                            />} label={`${name}`}
                                        />))}
                            </FormGroup>
                        </Grid> */}
                    </Grid>
                </Container>

            );
        }
    }
}

export default SearchForm;

                //NAME, DESIGNATION, STATE LAT LONG DESCRIPTION


