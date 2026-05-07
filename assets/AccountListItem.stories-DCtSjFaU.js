import{j as t}from"./iframe-V8BRfBgT.js";import{S as a}from"./Handshake-mIDFXANk.js";import{S as e}from"./Bell-C4Xj-ndx.js";import{S as s}from"./Hashtag-B_997yg1.js";import{S as n}from"./Files-B5Kidhb2.js";import{A as p}from"./AccountListItem-FgRh8AZm.js";import{L as m}from"./List-DZ-oUhHw.js";import{A as l}from"./AccountListItemDetails-D0f2Vjs4.js";import{B as c}from"./Button-BlxzDMPI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cpax_hNq.js";import"./ListItem-BYbxtLr3.js";import"./index-Dg3z2A9f.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./lite-DaUVFjkg.js";import"./XMark-C45HvrEl.js";import"./Icon-BWOTtVf8.js";import"./Skeleton-BQtaEJM-.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs--fAMpcSQ.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./ChevronUp-DYD-_Lcf.js";import"./ChevronDown-Dj082slW.js";import"./ChevronRight-Cz_uty1S.js";import"./HeartFill-YlZNLLsB.js";import"./ContextMenu-D6_jywBP.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Dropdown-ChJd6AE_.js";import"./MenuElipsisHorizontal-DkUfYG-z.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./FieldBase-DENJ-wBn.js";import"./Typography-BiIpQq_S.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Checkmark-BKwfqVUb.js";import"./ItemControls-BctCfWNT.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./Flex-Cr7oVI5u.js";import"./Section-BCm3_cLa.js";import"./ButtonGroup-GmtwjaC0.js";import"./Divider-CyBU1eNU.js";import"./SettingsItem-Dxq7-gi5.js";import"./SettingsItemBase-BV6WBeO5.js";import"./ItemLink-B6sA5uMo.js";import"./SettingsModal-DeDDsN3r.js";import"./ModalBody-6Y6EgB47.js";import"./ButtonIcon-Cv74LTLY.js";import"./ButtonLabel-Du-lXLEM.js";import"./AccountOrganization-DbNW6S1l.js";import"./Byline-C_Ji-SMs.js";import"./button-2-meUg78.js";const ft={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const St=["Default","Expanded"];export{r as Default,i as Expanded,St as __namedExportsOrder,ft as default};
