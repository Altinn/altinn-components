import{a7 as t,c as o}from"./iframe-CsUY_6Pm.js";import{S as s}from"./Handshake-DhZBPlTr.js";import{S as e}from"./Bell-CzCqVDS5.js";import{S as n}from"./Hashtag-BJ7CcAfA.js";import{S as p}from"./Files-B1LyluEX.js";import{A as m}from"./AccountListItem-By61FfrN.js";import{A as l}from"./AccountListItemDetails-B8gQUet5.js";import{L as c}from"./List-BfidzhqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-ac3I4IHC.js";import"./Input-DQsW0xWY.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./ChevronUp-Bv6xfL3F.js";import"./ChevronDown-B43wHz9B.js";import"./ChevronRight-JfwdXccy.js";import"./HeartFill-DqWcOg_v.js";import"./ContextMenu-bLhI4Wts.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./SearchField-R79aEMhJ.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./useMenu-C86uaFsI.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./ItemLabel-CCNLeNoZ.js";import"./ItemControls-BSDhx_cJ.js";import"./InformationSquare-DR0XxH_N.js";import"./MenuElipsisHorizontal-CtugNeIq.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./ButtonGroup-BnfYb0Ol.js";import"./Divider-DgndApZC.js";import"./SettingsItem-DZyoKZpx.js";import"./SettingsItemBase-CwbNbw14.js";import"./ItemBase-BpJAdC-Z.js";import"./ItemLink-CKOy_adf.js";import"./SettingsModal-DEcYPgJ9.js";import"./ModalBody-CQkVoQZl.js";import"./ButtonIcon-BS7n_J2G.js";import"./ButtonLabel-DqKrA-HR.js";import"./AccountOrganization-DtBU2TUq.js";import"./Byline-DjnpylD5.js";const ut={title:"Account/AccountListItem",component:m,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["Default","Expanded"];export{r as Default,i as Expanded,vt as __namedExportsOrder,ut as default};
