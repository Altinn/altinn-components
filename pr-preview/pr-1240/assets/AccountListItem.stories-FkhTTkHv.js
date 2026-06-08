import{a7 as t,c as o}from"./iframe-C3-39QZn.js";import{S as s}from"./Handshake-DPMi9VBY.js";import{S as e}from"./Bell-Di1Fc4mq.js";import{S as n}from"./Hashtag-B0hf6od8.js";import{S as p}from"./Files-dlvyHk1P.js";import{A as l}from"./AccountListItem-DEK80R2d.js";import{A as m}from"./AccountListItemDetails-CZ1LHQmK.js";import{L as c}from"./List-C0B2zVng.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-BhGiT6gr.js";import"./Input-Ck9X-Ajd.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./ChevronRight-C8E9q9OI.js";import"./HeartFill-l3zYTDm7.js";import"./ContextMenu-C49fggZX.js";import"./useDropdownMenuController-Ch-gS0ya.js";import"./Dropdown-DwcIrTVC.js";import"./SearchField-BHCumu4V.js";import"./MagnifyingGlass-W4-YHK47.js";import"./FieldBase-CuUVQ-X3.js";import"./Typography-DzSxU3qn.js";import"./Field-D-SteSQi.js";import"./Label-BXFq-CrQ.js";import"./useMenu-PdCJBcPZ.js";import"./MenuListItem-C_zHoz8h.js";import"./MenuListHeading-BABwYJ-w.js";import"./MenuItem-_nHd0yat.js";import"./ItemMedia-Dvk-rH5V.js";import"./Checkmark-DcGYSDVC.js";import"./ItemLabel-EUoHzQAm.js";import"./ItemControls-CvvFc83j.js";import"./index-DsMJ5_O1.js";import"./InformationSquare-CikWmUv2.js";import"./MenuElipsisHorizontal-BDwvxdWn.js";import"./Section-B5UTl4N5.js";import"./Flex-cOQ4YkiH.js";import"./ButtonGroup-BudWnE7m.js";import"./Divider-DEcFljaK.js";import"./SettingsItem-D0HWKfOi.js";import"./SettingsItemBase-H74J4ETX.js";import"./ItemBase-BAbRxOK9.js";import"./ItemLink-B72RuPPU.js";import"./SettingsModal-BXOmvntj.js";import"./ModalBody-zCgDpQcI.js";import"./ButtonIcon-BUSJeZxi.js";import"./ButtonLabel-DDZPkCx5.js";import"./AccountOrganization-DZ5Ml4gV.js";import"./Byline-B1hqh-Dc.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
