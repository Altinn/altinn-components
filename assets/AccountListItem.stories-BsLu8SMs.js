import{a7 as t,c as o}from"./iframe-Dmn_-H53.js";import{S as s}from"./Handshake-CUlg7Vnx.js";import{S as e}from"./Bell-5_GtUnTX.js";import{S as n}from"./Hashtag-BBrMTHZA.js";import{S as p}from"./Files-IUr1L0Dc.js";import{A as l}from"./AccountListItem-D_GKoWSd.js";import{A as m}from"./AccountListItemDetails-cenPsYtC.js";import{L as c}from"./List-C-oRwPam.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CjxBcmV6.js";import"./Input-CiIUlzDr.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./Heading-mFrUmf7m.js";import"./useHighlightedText-CD-cx98y.js";import"./ChevronUp-EToNysLX.js";import"./ChevronDown-VmG4T_9A.js";import"./ChevronRight-Wr9L-VUi.js";import"./HeartFill-9Go6A22I.js";import"./ContextMenu-CGD-TvHH.js";import"./useDropdownMenuController-DHTHwr26.js";import"./Dropdown-DpD8qCpr.js";import"./SearchField-DeTed8Dk.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./useMenu-B_9AoNot.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuListHeading-BrW5zaeP.js";import"./MenuItem-C30u_q0-.js";import"./ItemMedia-D_bOU9XF.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./ItemControls-CbvyOb0R.js";import"./index-Qm016dy0.js";import"./InformationSquare-DAE6V11Y.js";import"./MenuElipsisHorizontal-CvUsH0ZC.js";import"./Section-B0K1LM20.js";import"./Flex-Dt5U6DKy.js";import"./ButtonGroup-CPlQwmGd.js";import"./Divider-CH05F2gF.js";import"./SettingsItem-UL63NvN_.js";import"./SettingsItemBase-CYKWgdSM.js";import"./ItemBase-C7SIy94-.js";import"./ItemLink-bXYHdO_H.js";import"./SettingsModal-DJ1z037I.js";import"./ModalBody-CxAozs8t.js";import"./ButtonIcon-BdkdVYvg.js";import"./ButtonLabel-wmKbEjn1.js";import"./AccountOrganization-BluBUHxl.js";import"./Byline-Dd3tbNMi.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
