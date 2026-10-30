var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a5 as t,b as p}from"./iframe-BEPBrhYh.js";import{S as l}from"./Handshake-Bkn8IMTA.js";import{S as a}from"./Bell-DdUOgGSC.js";import{S as m}from"./Hashtag-CyQ88grw.js";import{S as c}from"./Files-p4lW4Fqr.js";import{A as g}from"./AccountListItem-CoKsEfQO.js";import{A as d}from"./AccountListItemDetails-XnaOpOCP.js";import{L as u}from"./List-BMyhmX1P.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DeiuC3sl.js";import"./Input-DvI4J5FV.js";import"./Avatar-qDEqb0bI.js";import"./AvatarGroup-Gy14OH0C.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./Heading-BqUC1GBi.js";import"./useHighlightedText-DWAIm2UF.js";import"./ChevronUp-Bk9rr-UB.js";import"./ChevronDown-BSSTTv90.js";import"./ChevronRight-BrDrfe7a.js";import"./HeartFill-C6llmCUX.js";import"./ContextMenu-CekCrG_1.js";import"./useDropdownMenuController-DdlZblN1.js";import"./Dropdown-CldWVtsu.js";import"./SearchField-r0pyJJeA.js";import"./MagnifyingGlass-l6jgUFkE.js";import"./MenuListItem-2YHve_kq.js";import"./MenuListHeading-T5KLvVq-.js";import"./MenuItem-H_qy6f71.js";import"./ItemMedia-CYSGtJhU.js";import"./Checkmark-QQMx0dPf.js";import"./ItemLabel-BAi-NqVp.js";import"./ItemControls-CZ-8cGPW.js";import"./FieldBase-BC5T5LJl.js";import"./Typography-_e1X1oy3.js";import"./Field-DhJVWLwL.js";import"./Label-jwx91OTT.js";import"./useMenu-B9HVKiow.js";import"./MenuListDivider-DmSDyTka.js";import"./InformationSquare-D8scBrIA.js";import"./MenuElipsisHorizontal-BM49I1I7.js";import"./Section-Dz1fz0TX.js";import"./Flex-x8IfBbMo.js";import"./ButtonGroup-7udc4H2h.js";import"./Divider-DIFGevZU.js";import"./SettingsItem-B2gfcjw8.js";import"./SettingsItemBase-DRG8OS7r.js";import"./ItemBase-A6nm7hoq.js";import"./ItemLink-7n7ztO7T.js";import"./SettingsModal-R8oYHUmp.js";import"./ModalBody-3_P61XP4.js";import"./ButtonIcon-RzrWxu6x.js";import"./ButtonLabel-BsY3dJmG.js";import"./AccountOrganization-DUjTrig2.js";import"./Byline-abZ11abw.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
