import{p as t}from"./iframe-43_RSSTf.js";import{S as a}from"./Handshake-RNgapS9a.js";import{S as e}from"./Bell-OuASsAUs.js";import{S as s}from"./Hashtag-Cc1KsJ_c.js";import{S as n}from"./Files-BeEKNftm.js";import{A as p}from"./AccountListItem-C2zvi2Nt.js";import{A as m}from"./AccountListItemDetails-UXemBqlA.js";import{B as l}from"./Button-B83AdZGF.js";import{L as c}from"./List-CB81-vLr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BLkk23cI.js";import"./ListItem-DsTKnjuo.js";import"./index-D9XEmR3s.js";import"./Input-B-eeYerN.js";import"./tooltip-CaRi0lSN.js";import"./XMark-Baw5EL5c.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./HeartFill-CK5ZP6qh.js";import"./ContextMenu-e6118nKX.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./Label-DtAXMx4b.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./ItemControls-DImp59Cc.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./MenuElipsisHorizontal-DSMY0Bj5.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./ButtonGroup-w02pJMP9.js";import"./Divider-4gFXuIQf.js";import"./SettingsItem-C7MNkQHp.js";import"./SettingsItemBase-0pp7psHT.js";import"./ItemBase-ByoSv5t_.js";import"./ItemLink-NtTBDy97.js";import"./SettingsModal-pzz_m3jh.js";import"./ModalBody-RXLH-EOA.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";import"./AccountOrganization-V_6Wy_Jz.js";import"./Byline-1G4iuBat.js";const Bt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(c,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(l,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const It=["Default","Expanded"];export{r as Default,i as Expanded,It as __namedExportsOrder,Bt as default};
