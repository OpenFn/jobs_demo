create("Account", fields(
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("meh")
    return parseInt("19")
  })
));

//autodeploy set off
