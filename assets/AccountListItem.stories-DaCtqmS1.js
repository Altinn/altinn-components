import{a7 as t,c as o}from"./iframe-DzC97elN.js";import{S as s}from"./Handshake-BAIfiWNc.js";import{S as e}from"./Bell-jNl_hai2.js";import{S as n}from"./Hashtag-JWZZYncf.js";import{S as p}from"./Files-DgllgNkE.js";import{A as l}from"./AccountListItem-Cy2CXQaZ.js";import{A as m}from"./AccountListItemDetails-V80rwMlM.js";import{L as c}from"./List-ReLHH8Pg.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-Cp-qX0cT.js";import"./Input-DIyKL79r.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./HeartFill-Da683xUR.js";import"./ContextMenu-DV3SzXR2.js";import"./useDropdownMenuController-w-DqwR3B.js";import"./Dropdown-BeW3qmVa.js";import"./SearchField-D-nsUeta.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./useMenu-BjgtGKwv.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./ItemMedia-BZutnkw1.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./ItemControls-zCivkuXf.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./MenuElipsisHorizontal-CCv4JH7o.js";import"./Section-B7XqZvfR.js";import"./Flex-CXtmXiNa.js";import"./ButtonGroup-BbJZX9rk.js";import"./Divider-DUDd6Ifg.js";import"./SettingsItem-DeMHkbXP.js";import"./SettingsItemBase-DNgPJ9Wa.js";import"./ItemBase-IHm1UMeF.js";import"./ItemLink-DWCmLscF.js";import"./SettingsModal-B-gWkeFY.js";import"./ModalBody-CsfaIftq.js";import"./ButtonIcon-QQ_ZbP2-.js";import"./ButtonLabel-D7hHDrz9.js";import"./AccountOrganization-BfW64pYv.js";import"./Byline-BOlCNzmJ.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
