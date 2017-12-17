create("Account", fields(
  // case 1, github to openfn.. edi
  // case 2, openfn to github...!!hjkhjkh
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    console.log("live later new test")
    return false
  })
));

//autodeploy set of!!.
//

// ok, let's do this!!