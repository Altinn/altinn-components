import{a7 as t,c as o}from"./iframe-RnExGCnN.js";import{S as s}from"./Handshake-Bx6FUkWt.js";import{S as e}from"./Bell-CcCCjfwK.js";import{S as n}from"./Hashtag-B_YdVIEV.js";import{S as p}from"./Files-Dqtzlekv.js";import{A as l}from"./AccountListItem-BUXiyK0V.js";import{A as m}from"./AccountListItemDetails-BwSLCZxf.js";import{L as c}from"./List-CY0yYtOa.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DU4tohCc.js";import"./Input--YjiHlpM.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./ChevronUp-B2SXqU3E.js";import"./ChevronDown-CHkfpXTu.js";import"./ChevronRight-CN6Km5wu.js";import"./HeartFill-CtK1HR8J.js";import"./ContextMenu-DW3csCOG.js";import"./useDropdownMenuController-BoOePyNF.js";import"./Dropdown-B88VU_C4.js";import"./SearchField-vIwRNxpu.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Typography-C0LI4Nld.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./ItemControls-g4j5xbWR.js";import"./InformationSquare-CRikKN32.js";import"./MenuElipsisHorizontal-DgcAgh_d.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./ButtonGroup-CxEAmlK5.js";import"./Divider-DV7P9Vl3.js";import"./SettingsItem-COaNbiQu.js";import"./SettingsItemBase-9o7Vh2w8.js";import"./ItemBase-Ca-fo2iM.js";import"./ItemLink-teTwYyz-.js";import"./SettingsModal-D-4zKF3k.js";import"./ModalBody-Bso5XhNl.js";import"./ButtonIcon-DtB95v_v.js";import"./ButtonLabel-Dd7SipEs.js";import"./AccountOrganization-Btng2PLv.js";import"./Byline-DsvvFWAw.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
