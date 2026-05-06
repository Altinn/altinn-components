import{j as t}from"./iframe-JDDu8qct.js";import{S as a}from"./Handshake-DyoTq2n2.js";import{S as e}from"./Bell-C0lmnlht.js";import{S as s}from"./Hashtag-BuCzpj7-.js";import{S as n}from"./Files-oWNFx3wD.js";import{A as p}from"./AccountListItem-DyUVc_9d.js";import{L as m}from"./List-nBnRX5N2.js";import{A as l}from"./AccountListItemDetails-SEN0OalD.js";import{B as c}from"./Button-DJdKIqrT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BWG34Gxg.js";import"./ListItem-D34g-riv.js";import"./index--LOES4hQ.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./lite-DaUVFjkg.js";import"./XMark-YkWOq4QK.js";import"./Icon-DIHT6axv.js";import"./Skeleton-CG77vT0k.js";import"./Avatar-C90IY9ut.js";import"./AvatarGroup-iM9HxeRB.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-Dm0wt9US.js";import"./Heading-DTbUzRnV.js";import"./useHighlightedText-CEk7sGm4.js";import"./ChevronUp-Skyl4vcA.js";import"./ChevronDown-Bp0cSPFx.js";import"./ChevronRight-CAXd-oaR.js";import"./HeartFill-CgHryWGN.js";import"./ContextMenu-CY-OQIYm.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Dropdown-C4SP0e_D.js";import"./MenuElipsisHorizontal-3YEM2VfJ.js";import"./SearchField-CPeUZoGo.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./FieldBase-D3HPIoAl.js";import"./Typography-yaBddsX3.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./Checkmark-D1rpd2hz.js";import"./ItemControls-_7JFqe2W.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./Flex-BxwOuuQR.js";import"./Section-0xRJEQzM.js";import"./ButtonGroup-BtRMC3LR.js";import"./Divider-CEupNHti.js";import"./SettingsItem-u5RWHyj_.js";import"./SettingsItemBase-BLjp_FVb.js";import"./ItemLink-C0xhkHSa.js";import"./SettingsModal-BETMIUKy.js";import"./ModalBody-BI0E2lEd.js";import"./ButtonIcon-Dgd7YJHv.js";import"./ButtonLabel-BSXpWNmt.js";import"./AccountOrganization-CNu4CIw2.js";import"./Byline-D5n1Eazz.js";import"./button-xt_-egYh.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
