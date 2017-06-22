create("Account", fields(
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("live later #3")
    return parseInt("19")
    console.log("after the return!")
    17+2 == 13...
  })
));

//autodeploy set off
