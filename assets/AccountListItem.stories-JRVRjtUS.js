var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a5 as t,b as p}from"./iframe-CplFPuE2.js";import{S as l}from"./Handshake-CxF18NzN.js";import{S as a}from"./Bell-Ks_WFjfG.js";import{S as m}from"./Hashtag-B3BZvMoe.js";import{S as c}from"./Files-Bx4UF9Xk.js";import{A as g}from"./AccountListItem-CN-T5io2.js";import{A as d}from"./AccountListItemDetails-DFvkcPe2.js";import{L as u}from"./List-DjlZKLgR.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-BTgrhjIM.js";import"./Input-BNktXmCP.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";import"./HeartFill-CCjIgyb1.js";import"./ContextMenu-CvyTDIiz.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./SearchField-4LhcGogw.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./ItemControls-KQk_c0UL.js";import"./FieldBase-BHrQkTmp.js";import"./Typography-pPFkmvZJ.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./useMenu-Ct0wDmor.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";import"./MenuElipsisHorizontal-DQHYA2e7.js";import"./Section-CaXjLAlu.js";import"./Flex-CoXKQauA.js";import"./ButtonGroup-BYs_As_u.js";import"./Divider-cR4CUUoH.js";import"./SettingsItem-BGqNaBM-.js";import"./SettingsItemBase-CnCqpkD_.js";import"./ItemBase-D8QKfK-5.js";import"./ItemLink-BYmj_1KC.js";import"./SettingsModal-xBJrpL7h.js";import"./ModalBody-BJDu01Be.js";import"./ButtonIcon-B77pSTxU.js";import"./ButtonLabel-Bdm9dHON.js";import"./AccountOrganization-Bk1DznI0.js";import"./Byline-7e44F15m.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
