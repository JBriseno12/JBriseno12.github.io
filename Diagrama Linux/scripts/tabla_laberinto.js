function init() {

 const $ = go.GraphObject.make;  
  
  var mt8 = new go.Margin(8, 0, 0, 0);
  var mr8 = new go.Margin(0, 8, 0, 0);
  var ml8 = new go.Margin(0, 0, 0, 8);
  var roundedRectangleParams = {
    parameter1: 2, 
    spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  
  };

  myDiagram =
    new go.Diagram("myDiagramDiv",  
      {
        
        initialDocumentSpot: go.Spot.Top,
        initialViewportSpot: go.Spot.Top,
        
        layout:
          $(go.TreeLayout,  
            {
              isOngoing: false,  
              treeStyle: go.TreeLayout.StyleLastParents,
              
              angle: 90,
              layerSpacing: 80,
              
              alternateAngle: 0,
              alternateAlignment: go.TreeLayout.AlignmentStart,
              alternateNodeIndent: 15,
              alternateNodeIndentPastParent: 1,
              alternateNodeSpacing: 15,
              alternateLayerSpacing: 40,
              alternateLayerSpacingParentOverlap: 1,
              alternatePortSpot: new go.Spot(0.001, 1, 20, 0),
              alternateChildPortSpot: go.Spot.Left
            })
      });

  function textStyle(field) {
    return [
      {
        font: "12px Roboto, sans-serif", stroke: "rgba(0, 0, 0, .60)",
        visible: false  
      },
      new go.Binding("visible", field, val => val !== undefined)
    ];
  }

  function theNationFlagConverter(nation) {
    return "https://www.nwoods.com/images/emojiflags/" + nation + ".png";
  }

  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      {
        locationSpot: go.Spot.Top,
        isShadowed: true, shadowBlur: 1,
        shadowOffset: new go.Point(0, 1),
        shadowColor: "rgba(0, 0, 0, .14)",
        selectionAdornmentTemplate:
          $(go.Adornment, "Auto",
            $(go.Shape, "RoundedRectangle", roundedRectangleParams,
              { fill: null, stroke: "#7986cb", strokeWidth: 3 }
            ),
            $(go.Placeholder)
          )  
      },
      $(go.Shape, "RoundedRectangle", roundedRectangleParams,
        { name: "SHAPE", fill: "#ffffff", strokeWidth: 0 },
        
        new go.Binding("fill", "isHighlighted", h => h ? "gold" : "#ffffff").ofObject()
      ),
      $(go.Panel, "Vertical",
        $(go.Panel, "Horizontal",
          { margin: 8 },
          $(go.Picture,  
            { margin: mr8, visible: false, desiredSize: new go.Size(50, 50) },
            new go.Binding("source", "imageSource"),  
            new go.Binding("visible", "imageSource", src => src !== undefined)  
          ),
          $(go.Panel, "Table",
            $(go.TextBlock,
              {
                row: 0, alignment: go.Spot.Left,
                font: "16px Roboto, sans-serif",
                stroke: "rgba(0, 0, 0, .87)",
                maxSize: new go.Size(160, NaN)
              },
              new go.Binding("text", "name")
            ),
            $(go.TextBlock, textStyle("title"),
              {
                row: 1, alignment: go.Spot.Left,
                maxSize: new go.Size(160, NaN)
              },
              new go.Binding("text", "title")
            ),
            $("PanelExpanderButton", "INFO",
              { row: 0, column: 1, rowSpan: 2, margin: ml8 }
            )
          )
        ),
        $(go.Shape, "LineH",
          {
            stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
            height: 1, stretch: go.GraphObject.Horizontal
          },
          new go.Binding("visible").ofObject("INFO")  
        ),
        $(go.Panel, "Vertical",
          {
            name: "INFO",  
            stretch: go.GraphObject.Horizontal,  
            margin: 8,
            defaultAlignment: go.Spot.Left,  
          },
          $(go.TextBlock, textStyle("Descripcion"),
            new go.Binding("text", "Descripcion", head => head)
          ),
          $(go.TextBlock, textStyle("boss"),
            new go.Binding("margin", "Descripcion", head => mt8), 
            new go.Binding("text", "boss", boss => {
              var boss = myDiagram.model.findNodeDataForKey(boss);
              if (boss !== null) {
                return "Viene de: " + boss.name;
              }
              return "";
            })
          )
        )
      )
    );

  
  myDiagram.linkTemplate =
    $(go.Link, go.Link.Orthogonal,
      { corner: 5, selectable: false },
      $(go.Shape, { strokeWidth: 3, stroke: "#424242" }));  // dark gray, rounded corner links


  
  var nodeDataArray = [
    { key: 0, name: "Linux", imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPqqlzdcl_8msnalRnJB4iWEx63Jk33II2jSpQRkRug&s", Descripcion: "Sistema operativo de código abierto ampliamente utilizado. Aquí están algunas de sus distribuciones." },
    { key: 1, boss: 0, name: "Debian", imageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk-NXySMDW6bwmWmb7RaBz08BlIspxv73TXfvdP8oTA&s", Descripcion: "Distribución Linux sólida y estable, base de muchas otras distribuciones populares como Ubuntu." },
    { key: 2, boss: 1, name: "Ubuntu", imageSource: "https://e7.pngegg.com/pngimages/720/729/png-clipart-omg-ubuntu-installation-linux-feather-logo-design-computer-logo.png", Descripcion: "Fácil de usar y versátil, ampliamente adoptada en entornos de escritorio y servidores." },
    { key: 3, boss: 1, name: "Kali Linux", imageSource: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072016/untitled-1_16.png?itok=B4o_2UCy", Descripcion: "Especializada en seguridad informática y pruebas de penetración, derivada de Debian." },
    { key: 4, boss: 2, name: "Xubuntu", imageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Xubuntu_logo.svg/600px-Xubuntu_logo.svg.png", Descripcion: "Variantes de Ubuntu con diferentes entornos de escritorio para adaptarse a diversas necesidades de los usuarios." },   
    { key: 5, boss: 2, name: "Lubuntu", imageSource: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lubuntu_logo_only.svg", Descripcion: "Variantes de Ubuntu con diferentes entornos de escritorio para adaptarse a diversas necesidades de los usuarios." },   
    { key: 6, boss: 2, name: "Kubuntu", imageSource: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kubuntu_logo.svg", Descripcion: "Variantes de Ubuntu con diferentes entornos de escritorio para adaptarse a diversas necesidades de los usuarios." },
    { key: 7, boss: 2, name: "Linux Mint", imageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/2048px-Linux_Mint_logo_without_wordmark.svg.png", Descripcion: "Elegante y fácil de usar, con una experiencia de usuario similar a la de Windows." },
    { key: 8, boss: 2, name: "PopOS", imageSource: "https://pop.system76.com/icon-512.png", Descripcion: "Diseñada para hardware de System76, ofrece una experiencia de escritorio optimizada." },      
    { key: 9, boss: 8, name: "RedHat", imageSource: "https://www.servethehome.com/wp-content/uploads/2017/11/Redhat-logo.jpg", Descripcion: "Distribución empresarial conocida por su estabilidad y soporte a largo plazo." },
    { key: 10, boss: 9, name: "Suse", imageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/OpenSUSE_Logo.svg/2560px-OpenSUSE_Logo.svg.png", Descripcion: "Robusta y escalable, popular en entornos empresariales y de servidor." },   
    { key: 11, boss: 9, name: "Arch Linux", imageSource: "https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png", Descripcion: "Minimalista y altamente personalizable, ideal para usuarios avanzados y entusiastas de la personalización." }
  ];

  // create the Model with data for the tree, and assign to the Diagram
  myDiagram.model =
    new go.TreeModel(
      {
        nodeParentKeyProperty: "boss",  // this property refers to the parent node data
        nodeDataArray: nodeDataArray
      });

  // Overview
  myOverview =
    new go.Overview("myOverviewDiv",  // the HTML DIV element for the Overview
      { observed: myDiagram, contentAlignment: go.Spot.Center });   // tell it which Diagram to show and pan
}

// the Search functionality highlights all of the nodes that have at least one data property match a RegExp
function searchDiagram() {  // called by button
  var input = document.getElementById("mySearch");
  if (!input) return;
  myDiagram.focus();

  myDiagram.startTransaction("highlight search");

  if (input.value) {
    // search four different data properties for the string, any of which may match for success
    // create a case insensitive RegExp from what the user typed
    var safe = input.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var regex = new RegExp(safe, "i");
    var results = myDiagram.findNodesByExample({ name: regex },
      { nation: regex },
      { title: regex },
      { headOf: regex });
    myDiagram.highlightCollection(results);
    // try to center the diagram at the first node that was found
    if (results.count > 0) myDiagram.centerRect(results.first().actualBounds);
  } else {  // empty string only clears highlighteds collection
    myDiagram.clearHighlighteds();
  }

  myDiagram.commitTransaction("highlight search");
}
window.addEventListener('DOMContentLoaded', init);
