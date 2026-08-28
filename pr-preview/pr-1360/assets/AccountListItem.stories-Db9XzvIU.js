import{a7 as t,c as o}from"./iframe-Drliw4W2.js";import{S as s}from"./Handshake-CL_GgtQu.js";import{S as e}from"./Bell-DDrhpYFO.js";import{S as n}from"./Hashtag-cz54WTWH.js";import{S as p}from"./Files-Dy7ra0rj.js";import{A as l}from"./AccountListItem-DmwNv-o2.js";import{A as m}from"./AccountListItemDetails-BESekYyZ.js";import{L as c}from"./List-_2Jr2q9P.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Df4h6uIX.js";import"./Input-BD6Nzkxf.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./Heading-CnkMiV4w.js";import"./useHighlightedText-Cu370CX4.js";import"./ChevronUp-W1N7Dm2d.js";import"./ChevronDown-CG1jtrk-.js";import"./ChevronRight-_-mAy6yU.js";import"./HeartFill-Dceq-Y4A.js";import"./ContextMenu-XpuA0EJC.js";import"./useDropdownMenuController-CymhG5YZ.js";import"./Dropdown-B9PzuGtE.js";import"./SearchField-42vl3Hhr.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./useMenu-DH_c0Y1A.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./MenuListHeading-B-ydP8rv.js";import"./MenuItem-CDxKhji-.js";import"./ItemMedia-BONexNJs.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./ItemControls-CQnobUv3.js";import"./InformationSquare-DpTm6Ali.js";import"./MenuElipsisHorizontal-kdZIghGy.js";import"./Section-zMN4ePg0.js";import"./Flex-Bge8S33P.js";import"./ButtonGroup-DIwL-jQY.js";import"./Divider-h1zWDTZp.js";import"./SettingsItem-t-gLIgoN.js";import"./SettingsItemBase--mansMbz.js";import"./ItemBase-Dw5k1qmp.js";import"./ItemLink-QPNf1VCw.js";import"./SettingsModal-CQf4QPbv.js";import"./ModalBody-Dclc077g.js";import"./ButtonIcon-BqRKOYIO.js";import"./ButtonLabel-CL7OHOIR.js";import"./AccountOrganization-_7eDhzI_.js";import"./Byline-rCAiTbRr.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
