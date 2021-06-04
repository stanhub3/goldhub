---
draft: false
showcontact: true
index: true
data:
  contact_agree: false
showcart: true
showsearch: true
title: Customer Support
description: If You Need Custom Solutions To Your Site, That is Not Included
  Here By Default You Can Contact Us.
featured_image: /images/support-banner.jpeg
cover_photo:
  color: white
  shade: ""
  font: steel
form:
  action: "#"
  method: POST
  button:
    text: Submit
  recaptcha:
    enable: false
    siteKey: ""
  agreement:
    enable: true
    text: I have read and agreed to
    links:
      - name: privacy policy
        link: "#privacy"
      - name: cookie policy
        link: "#cookie"
  fields:
    - name: entry.123
      label: Name
      type: text
      value: name
      validation:
        required: true
        pattern: ^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
        title: Special Characters and Number Not Allowed.
      tag: input
      placeholder: Juan Dela Cruz
    - name: emailAddress
      label: Email
      type: email
      value: email
      validation:
        required: true
      tag: input
      placeholder: juandelacruz@gmail.com
    - name: entry.234
      label: Contact No.
      type: text
      value: mobile
      validation:
        required: true
        pattern: ((^(\+)(\d){12}$)|(^\d{11}$))
        title: Must Start With +639XXXXXXXXXX or 09XXXXXXXXXX
      tag: input
      placeholder: "+63915123456789"
    - name: entry.345
      label: Message
      type: text
      value: message
      validation:
        required: true
      tag: textarea
      placeholder: How Many Order Of Product X Can I  Get Wholesale Price?
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
