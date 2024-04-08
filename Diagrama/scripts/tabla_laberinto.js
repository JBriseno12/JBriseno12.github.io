
const myDiagram = new go.Diagram("myDiagramDiv",
  {
    "undoManager.isEnabled": true,
    layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 })
  });

// the template we defined earlier
myDiagram.nodeTemplate =
  new go.Node("Horizontal",
    { background: "#3DA633" })
    .add(new go.Picture(
        { margin: 10, width: 50, height: 50, background: "red" })
        .bind("source"))
    .add(new go.TextBlock("Default Text",
        { margin: 12, stroke: "yellow", font: "bold 16px sans-serif" })
        .bind("text", "name"));

  
  // Define el modelo de datos del diagrama usando GraphLinksModel
  myDiagram.model = new go.GraphLinksModel(
    [ // Lista de nodos
      { key: "1", name: "Sargeras", source: "https://i.pinimg.com/564x/72/33/5a/72335a20de9d4473cef24f5d1e475daa.jpg" },
      { key: "2", name: "Kil'Jaden", source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmQj3S7_GEI5-j0ngqimRgRkswZC22mHIDrnZQGILkQ&s" },
      { key: "3", name: "Archimonde", source: "https://cdnb.artstation.com/p/assets/images/images/004/418/675/large/meng-xiangning-archimonde1440x810-2.jpg?1483594163" },
      { key: "4", name: "Mannoroth", source: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2db5c04-0c63-4900-b8b6-682de488f271/d6ijy8i-98da76bd-6eb3-461c-8592-e06701f9ca9c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyZGI1YzA0LTBjNjMtNDkwMC1iOGI2LTY4MmRlNDg4ZjI3MVwvZDZpank4aS05OGRhNzZiZC02ZWIzLTQ2MWMtODU5Mi1lMDY3MDFmOWNhOWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cIuthRHmZ5BTbKU0FNwXBJeF6LWhuNOBgFzKBIfJOnY" },
      { key: "5", name: "Magtheridon", source: "https://www.accountwarehouse.com/images/blog/64/mag2.jpg" },
      { key: "6", name: "Tichondrius", source: "https://i.pinimg.com/236x/b6/d7/8f/b6d78f706b3efd4cf4b84bfea1e2ec16.jpg" },
      { key: "7", name: "Mephistroth", source: "https://pbs.twimg.com/profile_images/770793030190325760/5e8ArZq-_400x400.jpg" },
      { key: "8", name: "Illidan", source: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b975e3b-4ea8-4c3e-99db-3b6d86589372/def3wem-fbb841c8-b08b-4fab-baee-5422cfc7943e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiOTc1ZTNiLTRlYTgtNGMzZS05OWRiLTNiNmQ4NjU4OTM3MlwvZGVmM3dlbS1mYmI4NDFjOC1iMDhiLTRmYWItYmFlZS01NDIyY2ZjNzk0M2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c2wx57zvz_i8VNZhOZ4R_v3kP-TfPsiWKZ87Ls5BjJY" },
      { key: "9", name: "Anetheron", source: "https://pbs.twimg.com/media/F9e5EbBWQAAVF-e.jpg" },
      { key: "10", name: "Kael'Thas", source: "https://pbs.twimg.com/amplify_video_thumb/1440707487489921042/img/6E5Q72JhBRBkiOBj.jpg" },
      { key: "11", name: "Lady Vashj", source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHM-M9NczTU_gvSetxV8LqL1ZbX5gcopESUoNq6x5h6w&s" },
      { key: "12", name: "Mal'Ganis", source: "https://pm1.aminoapps.com/7009/5ace3bbf55f19eea1b7285048f158a694734ea5fr1-474-663v2_uhq.jpg" },
      { key: "13", name: "Detheroc", source: "https://assets.mycast.io/actor_images/actor-detheroc-282572_small.jpg?1633712360" },
      { key: "14", name: "Varimathras", source: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/073fbe2b-5b87-4119-9266-6eb6c817185d/dcowbi3-9c64f6bd-ddfb-42f6-9a0e-dc65310c280d.jpg/v1/fill/w_1024,h_1305,q_75,strp/varimathras_by_medervik_dcowbi3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwNSIsInBhdGgiOiJcL2ZcLzA3M2ZiZTJiLTViODctNDExOS05MjY2LTZlYjZjODE3MTg1ZFwvZGNvd2JpMy05YzY0ZjZiZC1kZGZiLTQyZjYtOWEwZS1kYzY1MzEwYzI4MGQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DWPSYukYZ_Z0R1ttwplZyQC9D0Bvq2JagopcJQ0eDVo" },
      { key: "15", name: "Balnzaar", source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSe9A_t1nSkpI7wiPGFRkmJQ5xXBTwZpup1O9FI-oYA&s" },
      { key: "16", name: "Dalvengyr", source: "https://www.hiveworkshop.com/data/ratory-images/15/15725-482c6d70deb011a9b86e5884ed74cc1c.jpg" },
      { key: "17", name: "Azgalor", source: "https://i.pinimg.com/736x/1c/23/a8/1c23a85491d656db08103f135a02102c.jpg" },
      { key: "18", name: "Gul'Dan", source: "https://i.redd.it/z7i82q526fn91.jpg" }
      // ... más nodos según sea necesario ...
    ],
    [ // Lista de enlaces
      { from: "1", to: "2" },//Sargeras a Kil'Jaden
      { from: "1", to: "3" },//Sargeras a Archimonde

      { from: "2", to: "5" },// Kil'Jaden a Magtheridon
      
      { from: "5", to: "6" },// Magtheridon a Tichondrius
      
      { from: "6", to: "7" },// Tichondrius a Mephistroth
      
      { from: "6", to: "8" },//Tichondrius a Illidan

      { from: "8", to: "10" },//Illidan a Kael'Thas
      { from: "8", to: "11" },//Illidan a Lady Vashj

      { from: "6", to: "9" },//Tichondrius a Anetheron

      { from: "2", to: "4" },// Kil'Jaden a Mannoroth
      { from: "3", to: "4" },// Archimonde a Mannoroth
      
      { from: "2", to: "5" },// Kil'Jaden a Magtheridon
      { from: "5", to: "6" },// Magtheridon a Tichondrius

      { from: "4", to: "17" },//Mannoroth a Azgalor
      { from: "4", to: "18" },//Mannoroth a Gul'Dan

      { from: "3", to: "12" },//Archimonde a Mal'Ganis

      { from: "12", to: "13" },//Mal'Ganis a Detheroc
      { from: "12", to: "14" },//Mal'Ganis a Varimathras
      { from: "12", to: "15" },//Mal'Ganis a Balnazaar
      { from: "12", to: "16" },//Mal'Ganis a Dalvengyr
    ]
  );
  