import NeoVis from "neovis.js";
import { useEffect } from "react";

function NeovisComponent() {
  useEffect(() => {
    let neoViz;

    function draw() {
      const config = {
        containerId: "viz",
        neo4j: {
          // serverUrl: "bolt://localhost:7687",
          serverUser: "neo4j",
          // serverPassword: "12345678",
          serverUrl: "bolt://16cea75e.databases.neo4j.io",
          serverPassword: "_swaqDxanVf1hK9fLCRaAbWarE74c_03lH8PlKgnKq0",
          driverConfig: {
            encrypted: "ENCRYPTION_ON",
            trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
          },
        },
        visConfig: {
          nodes: {
            shape: "circle",
            font: {
              face: "arial",
              size: 12,
              strokeWidth: 0,
            },
            widthConstraint: 100,
            shadow: true,
          },
          edges: {
            hoverWidth: 0.1,
            selectionWidth: 0,
            smooth: {
              type: "continuous",
              roundness: 0.15,
            },
            font: {
              size: 9,
              strokeWidth: 0,
              align: "top",
            },
            color: {
              inherit: true,
            },
            arrows: {
              to: {
                enabled: true,
                type: "arrow",
                scaleFactor: 0.5,
              },
            },
          },
        },
        labels: {
          Artist: {
            label: "name",
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
              static: {
                size: 250,
              },
              cypher: {
                value: "MATCH (n) RETURN n",
              },
              function: {
                title: function (node) {
                  var nameArray = node.properties["name"].split(" ");
                  var Name = "";
                  var spaceCounter = 0;
                  for (const name of nameArray) {
                    Name += name + " ";
                    spaceCounter += name.length;
                    if (spaceCounter > 10) {
                      Name += "\n";
                      spaceCounter = 0;
                    }
                  }

                  node.properties["name"] = Name;
                  console.log("node >> ", node);
                  return (
                    node.properties["name"] +
                    "Wallet: " +
                    node.properties["wallet"] +
                    "\n" +
                    "Song Hits: " +
                    node.properties["numberofSongs"] +
                    "\n" +
                    "Views: " +
                    node.properties["views"]
                  );
                },
              },
            },
            Dataset: {
              label: "neo4j",
            },
          },
          LicensingCompany: {
            label: "name",
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
              static: {
                size: 250,
              },
              cypher: {
                value: "MATCH (n) RETURN n",
              },
              function: {
                title: function (node) {
                  var nameArray = node.properties["name"].split(" ");
                  var Name = "";
                  var spaceCounter = 0;
                  for (const name of nameArray) {
                    Name += name + " ";
                    spaceCounter += name.length;
                    if (spaceCounter > 10) {
                      Name += "\n";
                      spaceCounter = 0;
                    }
                  }

                  node.properties["name"] = Name;
                  console.log("node >> ", node);
                  return (
                    node.properties["name"] +
                    "Wallet: " +
                    node.properties["wallet"] +
                    "\n" +
                    "Licensing Fee: " +
                    node.properties["licenseFee"] +
                    "\n" +
                    "Deadline: " +
                    node.properties["deadline"]
                  );
                },
              },
            },
            Dataset: {
              label: "neo4j",
            },
          },
          Song: {
            label: "name",
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
              static: {
                size: 250,
              },
              cypher: {
                value: "MATCH (n) RETURN n",
              },
              function: {
                title: function (node) {
                  var nameArray = node.properties["name"].split(" ");
                  var Name = "";
                  var spaceCounter = 0;
                  for (const name of nameArray) {
                    Name += name + " ";
                    spaceCounter += name.length;
                    if (spaceCounter > 10) {
                      Name += "\n";
                      spaceCounter = 0;
                    }
                  }

                  node.properties["name"] = Name;
                  console.log("node >> ", node);
                  return (
                    node.properties["name"] +
                    "Desc: " +
                    node.properties["description"] +
                    "\n" +
                    "Views: " +
                    node.properties["views"]
                  );
                },
              },
            },
            Dataset: {
              label: "neo4j",
            },
          },
        },
        relationships: {
          owns: {
            label: "owns",
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
              function: {
                title: function (edge) {
                  console.log(edge);
                  return "owns";
                },
              },
            },
          },
          LicensedTo: {
            label: "LicensedTo",
            [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
              function: {
                title: NeoVis.objectToTitleHtml,
              },
            },
          },
        },
        initialCypher:
          "MATCH (a:Artist)-[o:owns]->(s:Song)-[l:LicensedTo]->(c:LicensingCompany) RETURN a,o,s,l,c",
      };

      neoViz = new NeoVis(config);
      neoViz.render();
      console.log("neoViz >> ", neoViz);
    }

    draw();
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "1px solid lightgray",
        font: "22pt arial",
      }}
    >
      <div id="viz" style={{ width: "900px", height: "1700px" }}>
        Neo4j Ownership Visualization
      </div>
    </div>
  );
}

export default NeovisComponent;
