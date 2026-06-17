import{a7 as t,c as o}from"./iframe-C7E9hFuS.js";import{S as s}from"./Handshake-4_vRNJ6Y.js";import{S as e}from"./Bell-B5QcSmiH.js";import{S as n}from"./Hashtag-i3wbZZwP.js";import{S as p}from"./Files-CLBHzJx3.js";import{A as l}from"./AccountListItem-Ct9BwA4O.js";import{A as m}from"./AccountListItemDetails-8YS0tmSt.js";import{L as c}from"./List-CdmMPCCF.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-HCh9Njwh.js";import"./Input-aQKngZ0n.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./Heading-BjzdT1Qv.js";import"./useHighlightedText-BVZd64N7.js";import"./ChevronUp-COfk5MU7.js";import"./ChevronDown-S6psbACT.js";import"./ChevronRight-BkycUKsy.js";import"./HeartFill-1dHApWzA.js";import"./ContextMenu-C0QCVczp.js";import"./useDropdownMenuController-DFRzn_Ll.js";import"./Dropdown-CODOojNF.js";import"./SearchField-B7eNYfaD.js";import"./MagnifyingGlass-K55ud6sH.js";import"./FieldBase-C9YC6jMS.js";import"./Typography-BHaJGqRT.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./useMenu-D_e4EtIh.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuListDivider-cJmmi06P.js";import"./MenuListHeading-anY2tX0X.js";import"./MenuItem-CJIUM84a.js";import"./ItemMedia-CHApnQjH.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./ItemControls-BSxWin7C.js";import"./InformationSquare-CD5xLXKd.js";import"./MenuElipsisHorizontal-B5xkva7P.js";import"./Section-0LkdBczO.js";import"./Flex-DW6TlYd6.js";import"./ButtonGroup-CAvVorAa.js";import"./Divider-C5OAdnqT.js";import"./SettingsItem-NK0hFZtt.js";import"./SettingsItemBase-CPoBfSiQ.js";import"./ItemBase-DTwNvInU.js";import"./ItemLink-CVrGLXSa.js";import"./SettingsModal-j4C-0Lav.js";import"./ModalBody-DhpjA3GN.js";import"./ButtonIcon-tBnnQk-x.js";import"./ButtonLabel-BhxdBqOX.js";import"./AccountOrganization-DoCrp3Te.js";import"./Byline-DA9sap8o.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
