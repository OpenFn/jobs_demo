create("Account", fields(
  field("Name", sourceValue("$.data.from")),
  field("Description", sourceValue("$.data.sampleText")),
  field("Website", sourceValue("$.data.website")),
  field("Phone", function(state) {
    return parseInt("17")
  })
));

// does this work? yahoo!
