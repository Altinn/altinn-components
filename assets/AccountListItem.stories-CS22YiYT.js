import{a7 as t,c as o}from"./iframe-COBbWeA3.js";import{S as s}from"./Handshake-BB35mvjr.js";import{S as e}from"./Bell-B6akePGs.js";import{S as n}from"./Hashtag-BM_BHIzv.js";import{S as p}from"./Files-C4_DOEL7.js";import{A as l}from"./AccountListItem-CkVGMUg4.js";import{A as m}from"./AccountListItemDetails-D2d3h1sp.js";import{L as c}from"./List-BOhzxjoW.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CFne46Z7.js";import"./Input-BuLWJ9G8.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./ChevronUp-BDeeV8M4.js";import"./ChevronDown-DuT6TpEz.js";import"./ChevronRight-gAwtmJAo.js";import"./HeartFill-dFx5lM65.js";import"./ContextMenu-CrIvz9QE.js";import"./useDropdownMenuController-BLmBdG76.js";import"./Dropdown-B2n1P303.js";import"./SearchField-C1W3zbfq.js";import"./MagnifyingGlass-BZ6J5iab.js";import"./FieldBase-DRB9b-3z.js";import"./Typography-BEwm6wl9.js";import"./Field-QFb6ZZM4.js";import"./Label-C-viX-1h.js";import"./useMenu-C3_JQO79.js";import"./MenuListItem-BpH-lOdT.js";import"./MenuListDivider-C_auds-g.js";import"./MenuListHeading-BpdGMS_N.js";import"./MenuItem-nArOW8Hu.js";import"./ItemMedia-CVZylXEj.js";import"./Checkmark-nzyjGA6l.js";import"./ItemLabel-BFAcVwUa.js";import"./ItemControls-DB9Qd_W5.js";import"./InformationSquare-DlnV5Jxm.js";import"./MenuElipsisHorizontal-CTMR9KRD.js";import"./Section-4iuaFN40.js";import"./Flex-D1m969Q2.js";import"./ButtonGroup-BLVUIK36.js";import"./Divider-Cs_mi-R8.js";import"./SettingsItem-Dy5_jvzu.js";import"./SettingsItemBase-BUs3VcwU.js";import"./ItemBase-Dh7qzoHA.js";import"./ItemLink-DTMH6OJr.js";import"./SettingsModal-QKjEc8Cf.js";import"./ModalBody-Ceid2vmt.js";import"./ButtonIcon-eJ5o8zW1.js";import"./ButtonLabel-EuAdkLCo.js";import"./AccountOrganization-C9LjOUnp.js";import"./Byline-COYo-T98.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
