var f=Object.defineProperty;var t=(s,e)=>f(s,"name",{value:e,configurable:!0});import{a5 as o}from"./iframe-zDfzPjQ-.js";import{u as j}from"./useProfileLayout-CNtve3a5.js";import{u as g,B as k}from"./useBookmarks-xOTeu01T.js";import{L as x}from"./Layout-vglnJcol.js";import{P as b}from"./PageBase-B7s_nOQY.js";import{H as m}from"./Heading-CKFRzaKs.js";import{T as I}from"./Toolbar-BaJCxyi0.js";import{B as h}from"./BookmarkModal-BMyw1JuD.js";import{u as C}from"./useInboxLayout-COKfJo_7.js";import{u as y}from"./useAccountMenu-KzwaMil7.js";import"./preload-helper-Cc2_yIPf.js";import"./HeartFill-DWq4EM8k.js";import"./Bell-Dn9a_7gF.js";import"./Bookmark-BunPpgRi.js";import"./ClockDashed-DZjsnkqQ.js";import"./globalMenu-CATmCGAI.js";import"./PersonCircle-BRcEdbYJ.js";import"./Buildings2-Cmv8W-Bb.js";import"./InboxFill-BQBSHFpa.js";import"./MenuGrid-YVJRjo8W.js";import"./MagnifyingGlass-D8qauCMU.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CJqTsyOd.js";import"./Trash-BQPU0aQd.js";import"./useLayout-B2QbmWB-.js";import"./useLocale-ViVT72na.js";import"./header-CRfS1HMY.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D1ILj_Qw.js";import"./BookmarkSettingsItem-0Zt3LlcI.js";import"./QueryLabel-BhJDTunj.js";import"./Plus-CbNnKwCf.js";import"./SettingsItemBase-Ci6e4bQP.js";import"./ItemMedia-C2cNA_4j.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";import"./ItemBase-CBBaiBDD.js";import"./ItemLink-C2Q5plIG.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./Typography-D20OWptm.js";import"./useHighlightedText-BKf3y1mD.js";import"./ContextMenu-Bewy7zPd.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./SearchField-BRYpM6iz.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./FieldBase-DhhNDbiD.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./MenuElipsisHorizontal-BZuKIlkb.js";import"./Pencil-DrjGlKF5.js";import"./SkipLink-B0UTbIld.js";import"./CookieBanner--YWLAuhK.js";import"./Link-CuRpULv0.js";import"./Banner-BTGqFQQN.js";import"./GlobalHeader-BcYMQlI_.js";import"./useIsDesktop-CHtQ0585.js";import"./GlobalAccountButton-O-pPWwwx.js";import"./Enter-DgRxpL9L.js";import"./GlobalMenuButton-CfqvwCN8.js";import"./MenuHamburger-BTQ1djkk.js";import"./AccountSelector-BlqOghqB.js";import"./Switch-DIWrH6AQ.js";import"./AccountMenu-SuH1iVbF.js";import"./GlobalMenu-DP6fa-WF.js";import"./ArrowUndo-DTnO_IVt.js";import"./Globe-EZ3f66Yc.js";import"./BreadcrumbsLink-D_kHep3B.js";import"./ArrowRight-Ce_4bhkg.js";import"./Footer-BbNaOC5C.js";import"./Flex-D4woKuNy.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonGroupDivider-DFK8qURn.js";import"./ChevronUpDown-DIWFTlwj.js";import"./ToolbarMenu-COc3PFIR.js";import"./ToolbarSearch-2wX6HJJ-.js";import"./SettingsModal-fD6tePd9.js";import"./ModalBody-BmMBPQXf.js";import"./Section-BxkDhIq7.js";import"./ButtonIcon-Ck0HIEFU.js";import"./ButtonLabel-lbb0L__I.js";import"./TextField-BRWr-P52.js";import"./inboxMenu-Be_qSTBE.js";const he={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},d=t(()=>{const s=C({pageId:"bookmarks"}),{items:e,groups:r,currentAccount:i}=y({includeGroups:!0}),{expandedId:n,onClose:a,groups:l,items:p,search:L}=g({grouped:!1}),B=n&&p.find(S=>S.id===n);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{accountMenu:{label:i?.title,items:e,groups:r,searchable:!0},search:L}),o.jsx(k,{items:p,groups:l}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),n&&o.jsx(h,{...B,title:"Rediger lagret søk",open:n!=="",onClose:a,buttons:[{label:"Lagre",onClick:t(()=>a(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>a(),"onClick")}]})]})})},"InboxSingleAccount"),u=t(()=>{const s=C({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Lagrede søk"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"InboxAllAccounts"),c=t(()=>{const s=j({pageId:"bookmarks"}),{expandedId:e,onClose:r,items:i,search:n,groups:a}=g({grouped:!0}),l=e&&i.find(p=>p.id===e);return o.jsx(x,{...s,children:o.jsxs(b,{children:[o.jsx(m,{size:"xl",children:"Bokmerker"}),o.jsx(I,{search:n}),o.jsx(k,{items:i,groups:a}),o.jsx(m,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(h,{...l,title:"Rediger lagret søk",open:e!=="",onClose:r,buttons:[{label:"Lagre",onClick:t(()=>r(),"onClick")},{label:"Slett",variant:"outline",onClick:t(()=>r(),"onClick")}]})]})})},"BookmarkSettings"),Ce=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...c.parameters?.docs?.source}}};export{c as BookmarkSettings,u as InboxAllAccounts,d as InboxSingleAccount,Ce as __namedExportsOrder,he as default};
