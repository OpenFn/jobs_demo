create("Account", fields(
  // real good from github not here now!
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("live later new test")
    return true
  })
));

//autodeploy set off
