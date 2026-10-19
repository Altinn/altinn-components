var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-C7zNVDTT.js";import{S as l}from"./Handshake-CQq9o42e.js";import{S as o}from"./Bell-CsPO5nr_.js";import{S as m}from"./Hashtag-DAlukAWc.js";import{S as c}from"./Files-BmrAPL6z.js";import{A as g}from"./AccountListItem-BJs8YwZY.js";import{A as d}from"./AccountListItemDetails-CQpW8Ftq.js";import{L as u}from"./List-Eab06pgk.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-taDywDuL.js";import"./Input-CFKt0A_s.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./HeartFill-Be15i5fa.js";import"./ContextMenu-CXs2yOxo.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./ItemControls-CUub_53H.js";import"./InformationSquare-BvDWZ3oM.js";import"./MenuElipsisHorizontal-CFqNpdCJ.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./ButtonGroup-CoqmCer7.js";import"./Divider-B8BEf1fJ.js";import"./SettingsItem-DVvt3bI4.js";import"./SettingsItemBase-CJYffbTY.js";import"./ItemBase-DuoRnkB5.js";import"./ItemLink-B4RQLXhb.js";import"./SettingsModal-BI6AVWDn.js";import"./ModalBody-DHblQtRU.js";import"./ButtonIcon-BPuZWt5t.js";import"./ButtonLabel-CpQPvS5S.js";import"./AccountOrganization-CTbaI0Ba.js";import"./Byline-9WqjKM1E.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
