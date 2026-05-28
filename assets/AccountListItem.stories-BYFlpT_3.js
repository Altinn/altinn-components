import{p as t}from"./iframe-BBbEwSaq.js";import{S as a}from"./Handshake-BpYy9JzH.js";import{S as e}from"./Bell-DBpgaexc.js";import{S as s}from"./Hashtag-Cl7EO5rZ.js";import{S as n}from"./Files-bNJLiVMz.js";import{A as p}from"./AccountListItem-vKf76j00.js";import{A as m}from"./AccountListItemDetails-eYzwi9Bg.js";import{B as l}from"./Button-DpW4Pu6O.js";import{L as c}from"./List-CzewomMq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DZp72-eX.js";import"./ListItem-CNcOgYac.js";import"./index-awH0sXcw.js";import"./Input-lqau07kD.js";import"./tooltip-D3G3Ewte.js";import"./XMark-Dw8JSfSd.js";import"./Icon-Cx6QAjG2.js";import"./Skeleton-DFF9p8Mx.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ChevronUp-BD5jqYZu.js";import"./ChevronDown-B-mDhRFL.js";import"./ChevronRight-Bj8DUJ8P.js";import"./HeartFill-wgMutIaO.js";import"./ContextMenu-j2psK2Du.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./Label-DdMEJ83A.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./ItemControls-DaNsbzwN.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./MenuElipsisHorizontal-WptlvvL2.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./ButtonGroup-oq7iIeFJ.js";import"./Divider-B4CG97r2.js";import"./SettingsItem-BJ3WEYzA.js";import"./SettingsItemBase-CVNbE6ML.js";import"./ItemBase-Fqig4UIJ.js";import"./ItemLink-CUO1wpZw.js";import"./SettingsModal-CoQVwDnP.js";import"./ModalBody-OK8R4PDd.js";import"./ButtonIcon-DIFqTzZe.js";import"./ButtonLabel-B0mhwuEU.js";import"./AccountOrganization-Ds1MzD9P.js";import"./Byline-DkV2O3WM.js";const Bt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const It=["Default","Expanded"];export{r as Default,i as Expanded,It as __namedExportsOrder,Bt as default};
