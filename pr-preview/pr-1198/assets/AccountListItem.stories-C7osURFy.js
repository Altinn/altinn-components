import{j as t}from"./iframe-YdRL1NzV.js";import{S as o}from"./Handshake-De3XSsMl.js";import{S as e}from"./Bell-CeAGXi_W.js";import{S as s}from"./Hashtag-2XczVpPX.js";import{S as n}from"./Files-Cpf94Yun.js";import{A as p}from"./AccountListItem-wlRO1Eq7.js";import{L as m}from"./List-ClwLIO8W.js";import{A as l}from"./AccountListItemDetails-wT6cbsHB.js";import{B as c}from"./Button-BwQOxknK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxHKrSZ4.js";import"./ListItem-C0qt05--.js";import"./index-SoIsie1y.js";import"./Input-Co3wY2OB.js";import"./tooltip-D0NJwlFT.js";import"./XMark-1l7ZvP46.js";import"./Icon-B4-srULI.js";import"./Skeleton-C3i9Ug5T.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ChevronUp-DpeVWcyB.js";import"./ChevronDown-Uy2Tl2KH.js";import"./ChevronRight-DrXpgbb_.js";import"./HeartFill-xZwyoFnY.js";import"./ContextMenu-BsQBLQnd.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Dropdown-CFQlkMFa.js";import"./MenuElipsisHorizontal-D5EdTq6X.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./Label-CoBwam8t.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Checkmark-Ple-kG_b.js";import"./ItemControls-CMhfwURs.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./Flex-8MCCOfGV.js";import"./Section-Bmd_KobT.js";import"./ButtonGroup-BTJ07o1P.js";import"./Divider-BCSoJ20Y.js";import"./SettingsItem-B87XgKpa.js";import"./SettingsItemBase-Ncp9urLT.js";import"./ItemLink-sUnd8Dq1.js";import"./SettingsModal-CSoyY2cF.js";import"./ModalBody-CTEW1e2E.js";import"./ButtonIcon-c6Xu1QVp.js";import"./ButtonLabel-DtM2G-uP.js";import"./AccountOrganization-DR2WIjk1.js";import"./Byline-CLkrgOLm.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
