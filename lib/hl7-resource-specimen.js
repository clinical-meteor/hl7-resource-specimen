
Specimens = new Meteor.Collection('specimens');

if (Meteor.isClient){
  Meteor.subscribe('specimens');
}



SpecimenSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Specimen"
    },
  "identifier" :
    type: [ Identifier ]
    },
  "status" : {
    type: String
    },
  "type" :
    type: CodeableConcept
    },
  "parent" : {
    type: [ ReferenceSchema ] // (Specimen)
    },
  "subject" : {
    type: ReferenceSchema // (Patient|Group|Device|Substance)
    },
  "accessionIdentifier" : {
    type: Identifier
    },
  "receivedTime" : {
    type: Date
    },
  "collection.collector" : {
    type: ReferenceSchema // (Practitioner)
    },
  "collection.comment" : {
    type: [String]
    },
  "collection.collectedDateTime" : {
    type: Date
    },
  "collection.collectedPeriod" : {
    type: Period
    },
  "collection.quantity" : {
    type: Quantity //(SimpleQuantity)
    },
  "collection.method" : {
    type: CodeableConcept
    },
  "collection.bodySite" : {
    type: CodeableConcept
    }
  "treatment.$.description" : {
    type: String
    },
  "treatment.$.procedure" : {
    type: CodeableConcept
    },
  "treatment.$.additive" : {
    type: [ ReferenceSchema ]  //(Substance)
    },
  "container.$.identifier" : {
    type: [ Identifier ]
    },
  "container.$.description" : {
    type:String
    },
  "container.$.type" : {
    type: CodeableConcept
    },
  "container.$.capacity" : {
    type: Quantity //(SimpleQuantity)
    },
  "container.$.specimenQuantity" : {
    type: Quantity //(SimpleQuantity)
    },
  "container.$.additiveCodeableConcept" : {
    type: CodeableConcept
    }
  "container.$.additiveReference" : {
    type: ReferenceSchema //(Substance)
    }
});
Specimens.attachSchema(SpecimenSchema);
