import{a7 as t,c as o}from"./iframe-CH-Rf2AI.js";import{S as s}from"./Handshake-jKQfR-1n.js";import{S as e}from"./Bell-fcA9xSh9.js";import{S as n}from"./Hashtag-Cahe3Lcj.js";import{S as p}from"./Files-Q69cdbAP.js";import{A as l}from"./AccountListItem-D_oaKWua.js";import{A as m}from"./AccountListItemDetails-Ds11RWXT.js";import{L as c}from"./List-CaklY40z.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CmAPlNYB.js";import"./Input-CCpKfFu1.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";import"./HeartFill-BYSAi8Z7.js";import"./ContextMenu-ClDw9k8P.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./useMenu-FkcUMU_-.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./ItemControls-loNIR_kd.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./MenuElipsisHorizontal-BHY8BNqA.js";import"./Section-DzGR-IUh.js";import"./Flex-BtYwPl5t.js";import"./ButtonGroup-6-1iOFaS.js";import"./Divider-JWvspdMS.js";import"./SettingsItem-BGVJ8lEr.js";import"./SettingsItemBase-Cht2WGOe.js";import"./ItemBase-B9tNoNOm.js";import"./ItemLink-FshzAh5h.js";import"./SettingsModal-Bx3rcEds.js";import"./ModalBody-DWS6WpdW.js";import"./ButtonIcon-CIT11Yqm.js";import"./ButtonLabel-DngeK8JL.js";import"./AccountOrganization-CuAeeMmM.js";import"./Byline-BShusoze.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
