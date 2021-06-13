---
draft: false
showcontact: true
index: true
data:
  contact_agree: false
showcart: false
showsearch: false
title: Contact Us
description: If you are in need to get in touch with us, we are happy to reply.
  Create a New Message below.
featured_image: /images/support-banner.jpeg
cover_photo:
  color: white
  shade: ""
  font: steel
form:
  action: https://docs.google.com/forms/u/1/d/e/1FAIpQLSf88ng1DrsWRw5nMEgTXqLA-GBIktjphzQ_GWupVjufhyfTyg/formResponse?embedded=true
  method: POST
  button:
    text: Submit
  recaptcha:
    enable: true
    siteKey: 6LeqJi0bAAAAAO8cei2lwefn28llXM3uwoA0Dqcc
  agreement:
    enable: true
    text: I have read and agreed to
    links:
      - name: privacy policy
        link: "#privacy"
      - name: cookie policy
        link: "#cookie"
  fields:
    - name: entry.1962674402
      label: Name
      type: text
      value: name
      validation:
        required: true
        pattern: ^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
        title: Special Characters and Number Not Allowed.
        minLength: ""
      tag: input
      placeholder: John Doe
    - name: emailAddress
      label: Email
      type: email
      value: email
      validation:
        required: true
      tag: input
      placeholder: juandelacruz@gmail.com
    - name: entry.1715356000
      label: Contact No.
      type: text
      value: mobile
      validation:
        required: true
        pattern: ((^(\+)(\d){12}$)|(^\d{11}$))
        title: Must Start With +639XXXXXXXXXX or 09XXXXXXXXXX
      tag: input
      placeholder: "+63915123456789"
    - name: entry.1318919415
      label: Message
      type: text
      value: message
      validation:
        required: true
      tag: textarea
      placeholder: Type Your Questions Here...
slug: support
sections:
  - template: contact/form
  - template: contact/mobiles
  - template: contact/locations
pick_up_locations:
  title: Pick Up Location
  locations: []
mobiles:
  title: Call / Text Us
  mobiles: []
---
