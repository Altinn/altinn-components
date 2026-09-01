import{a7 as t,c as o}from"./iframe-CD11FhkO.js";import{S as s}from"./Handshake-CrgMDj4i.js";import{S as e}from"./Bell-Cb8Dh618.js";import{S as n}from"./Hashtag-vftsWn6c.js";import{S as p}from"./Files-dCE_5UJv.js";import{A as l}from"./AccountListItem-C61AWMaE.js";import{A as m}from"./AccountListItemDetails-Df4eBN0I.js";import{L as c}from"./List-C9fldcID.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-BwiGPcXr.js";import"./Input-By1HeiMt.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./ChevronUp-BuZXJZ6x.js";import"./ChevronDown-Z-rCEWMI.js";import"./ChevronRight-DorAbKkm.js";import"./HeartFill-DrzRVXmd.js";import"./ContextMenu-DfXjvmV5.js";import"./useDropdownMenuController-Ggnaqgq1.js";import"./Dropdown-C71BxREr.js";import"./SearchField-DTHysOBi.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./FieldBase-BjWFGCCi.js";import"./Typography-CsSTPRBO.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./useMenu-PhHDaKm4.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuListDivider-C8FBE3A1.js";import"./MenuListHeading-CEMMnaXl.js";import"./MenuItem-Q62E5xuF.js";import"./ItemMedia-Da1KaWKQ.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./ItemControls-BM5eXiWu.js";import"./InformationSquare-885_pUeZ.js";import"./MenuElipsisHorizontal-CFTAtZFs.js";import"./Section-Cxsr3_z_.js";import"./Flex-BFs7VkGF.js";import"./ButtonGroup-CI_suWzv.js";import"./Divider-COQO8iSC.js";import"./SettingsItem-PdiaXTi0.js";import"./SettingsItemBase-DhVahffU.js";import"./ItemBase-B_lF_RDH.js";import"./ItemLink-D4O7kIZI.js";import"./SettingsModal-CN3EwZPn.js";import"./ModalBody-DMNSFyMM.js";import"./ButtonIcon-DSZ34whE.js";import"./ButtonLabel-CGB1_n10.js";import"./AccountOrganization-673hQEEU.js";import"./Byline-DE-vJ9Ow.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
