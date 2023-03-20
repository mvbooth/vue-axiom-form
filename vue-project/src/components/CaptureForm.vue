<script setup>
    import axios from 'axios'

    const submitForm = (captureData) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', captureData).then(response => {
                alert(JSON.stringify(response, null, 2)) 
            }).catch(error => {
                alert('Error: ' + error.response.status)
            })
        return false;
    }
</script>

<template>
    <FormKit
        type="form" 
        submit-label="Compare Rates"  
        @submit="submitForm" 
        id="CaptureForm"
    >
        <div class="row">
            <div class="column">
                <FormKit type="text" name="firstName" id="firstName" label="First Name" v-model="firstName" validation="required"/>
            </div>
            <div class="column">
                <FormKit type="text" name="lastName" id="lastName" label="Last Name" v-model="lastName" validation="required"/>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <FormKit type="text" name="zipCode" id="zipCode" label="Zip Code" v-model="zipCode" validation="required"/>
            </div>
            <div class="column">
                <FormKit type="tel" name="phoneNumber" id="phoneNumber" label="Phone Number" v-model="phoneNumber" validation="required"/>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <FormKit type="date" value="" name="birthday" id="birthday" label="Birthday" validation="required|date_before:2010-01-01"/>
            </div>
            <div class="column">
                <FormKit type="email" name="email" id="email" label="Email" v-model="email" validation="required|email"/>
            </div>
        </div>  
    </FormKit>
</template>

<style scoped>
    .row {
        display: flex;
    }
    .column {
        flex:1 1 50%;
    }

    .column:first-child {
        padding-right: 6px;
    }

    .column:last-child {
        padding-left: 6px;
    }
</style>

<style>
.formkit-actions .formkit-wrapper {
    width: 100%;
    max-width: none;
}
 .formkit-input[type="submit"] {
    background: #ef3a37 !important;
    border: none !important;
    width: 100% !important;
    padding: 15px !important;
    font-size: 22px;
    font-weight: 700;
    color: #ffffff !important;
    margin: 0;
}
</style>
