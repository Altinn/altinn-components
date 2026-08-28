import{a7 as t,c as o}from"./iframe-C9sF4CIH.js";import{S as s}from"./Handshake-Bbp3ay4V.js";import{S as e}from"./Bell-BqVP7lkp.js";import{S as n}from"./Hashtag-BX0wmTsJ.js";import{S as p}from"./Files-CL-af5vV.js";import{A as l}from"./AccountListItem-QqEvaaHn.js";import{A as m}from"./AccountListItemDetails-CwhOEAxt.js";import{L as c}from"./List-Ljyom4hg.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-BH0TUSLo.js";import"./Input-DZS0C5P8.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./Heading-CN6nglwQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./ChevronRight-BzqVHEpk.js";import"./HeartFill-Cb3oVF8z.js";import"./ContextMenu-ZXotIdMM.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./useMenu-BFGedA5y.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./ItemMedia-Ck6acBMI.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./ItemControls-BU12ltKZ.js";import"./InformationSquare-BmRwhtkQ.js";import"./MenuElipsisHorizontal-BiPwQStA.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./ButtonGroup-D3X_1KmS.js";import"./Divider-BdWJiqz4.js";import"./SettingsItem-D4XSqtud.js";import"./SettingsItemBase-kU9_c0w6.js";import"./ItemBase-CbO6Ng8R.js";import"./ItemLink-LcJuXaju.js";import"./SettingsModal-Bifh5L4V.js";import"./ModalBody-CtBEkc_A.js";import"./ButtonIcon-D2wF1g1O.js";import"./ButtonLabel-CEN1m5GJ.js";import"./AccountOrganization-BGzZUXfl.js";import"./Byline-DAi_lmyl.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
