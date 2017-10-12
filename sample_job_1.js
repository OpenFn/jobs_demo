create("Account", fields(
  // ok now!!!!!! try nowok
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("live later new test")
    return true
  })
));

//autodeploy set off
