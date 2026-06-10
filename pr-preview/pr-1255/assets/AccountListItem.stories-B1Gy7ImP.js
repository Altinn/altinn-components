import{a7 as t,c as o}from"./iframe-Dm8TtyEm.js";import{S as s}from"./Handshake-De0juPsW.js";import{S as e}from"./Bell-DFZYtnEr.js";import{S as n}from"./Hashtag-B2quk6-O.js";import{S as p}from"./Files-Cdq1bT7A.js";import{A as l}from"./AccountListItem-Da7sHMHm.js";import{A as m}from"./AccountListItemDetails-HD4tslAy.js";import{L as c}from"./List-Ci6hifXv.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-BnnY9TO9.js";import"./Input-CDGaFfUN.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./ChevronUp-Bb-oLMAx.js";import"./ChevronDown-DmzEbvsc.js";import"./ChevronRight-C5Kx_riS.js";import"./HeartFill-DqmA_Jut.js";import"./ContextMenu-WVnf3R79.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./SearchField-BpAQrR42.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Typography-DQcL3Ryl.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./useMenu-C6oFKHtp.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./ItemControls-DU_1Chfl.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./MenuElipsisHorizontal-CbjX2CGq.js";import"./Section-BrWI6aLb.js";import"./Flex-Cpk93h3c.js";import"./ButtonGroup-Cvq3R7p4.js";import"./Divider-pCPpdy6V.js";import"./SettingsItem-BdSMrSFz.js";import"./SettingsItemBase-CyHCeD-o.js";import"./ItemBase-DBsEIeJ_.js";import"./ItemLink-Cf5EIcQf.js";import"./SettingsModal-024qYl2I.js";import"./ModalBody-BPhOhrPb.js";import"./ButtonIcon-DDq-LKvW.js";import"./ButtonLabel-BVYKz0oP.js";import"./AccountOrganization-BqMuG7kT.js";import"./Byline-BVGszpIB.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
