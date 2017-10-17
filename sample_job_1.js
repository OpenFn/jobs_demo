create("Account", fields(
  // case 1, github to openfn.
  // case 2, openfn to github...!!
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("live later new test")
    return false
  })
));

//autodeploy set off
